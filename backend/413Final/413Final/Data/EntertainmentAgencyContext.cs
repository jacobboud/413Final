using _413Final.Models;
using Microsoft.EntityFrameworkCore;

namespace _413Final.Data
{
    // Database context for accessing Entertainers and Engagements tables
    public class EntertainmentAgencyContext : DbContext
    {
        public EntertainmentAgencyContext(DbContextOptions<EntertainmentAgencyContext> options)
            : base(options) { }

        public DbSet<Entertainer> Entertainers { get; set; }
        public DbSet<Engagement> Engagements { get; set; }

    }
}
