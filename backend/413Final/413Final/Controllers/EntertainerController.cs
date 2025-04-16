// Controller: EntertainerController
// Handles CRUD operations for entertainers
// Includes a custom endpoint to get booking stats

using _413Final.Data;
using _413Final.Models;
using _413Final.Models.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _413Final.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntertainerController : ControllerBase
    {
        private readonly EntertainmentAgencyContext _context;

        public EntertainerController(EntertainmentAgencyContext context)
        {
            _context = context;
        }

        // GET: Returns all entertainers with basic info
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var entertainers = await _context.Entertainers.ToListAsync();
            return Ok(entertainers);
        }

        // GET: Returns detailed entertainer data with booking count and last booking
        [HttpGet("WithStats")]
        public async Task<IActionResult> GetWithStats()
        {
            var result = await _context.Entertainers
                .Select(e => new EntertainerWithStats
                {
                    EntertainerID = e.EntertainerID,
                    EntStageName = e.EntStageName,
                    BookingCount = _context.Engagements.Count(en => en.EntertainerID == e.EntertainerID),
                    LastBookingDate = _context.Engagements
                        .Where(en => en.EntertainerID == e.EntertainerID)
                        .OrderByDescending(en => en.StartDate)
                        .Select(en => en.StartDate)
                        .FirstOrDefault()
                })
                .ToListAsync();

            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var entertainer = await _context.Entertainers.FindAsync(id);
            if (entertainer == null)
                return NotFound();

            return Ok(entertainer);
        }

        // More actions (POST, PUT, DELETE)

        [HttpPost]
        public async Task<IActionResult> AddEntertainer([FromBody] Entertainer entertainer)
        {
            _context.Entertainers.Add(entertainer);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = entertainer.EntertainerID }, entertainer);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEntertainer(int id, [FromBody] Entertainer entertainer)
        {
            if (id != entertainer.EntertainerID)
            {
                return BadRequest();
            }

            _context.Entry(entertainer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Entertainers.Any(e => e.EntertainerID == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEntertainer(int id)
        {
            var entertainer = await _context.Entertainers.FindAsync(id);
            if (entertainer == null)
            {
                return NotFound();
            }

            _context.Entertainers.Remove(entertainer);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
