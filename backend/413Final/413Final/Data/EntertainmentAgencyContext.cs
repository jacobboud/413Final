using _413Final.Models;
using Microsoft.EntityFrameworkCore;

namespace _413Final.Data
{
    public class EntertainmentAgencyContext : DbContext
    {
        public EntertainmentAgencyContext(DbContextOptions<EntertainmentAgencyContext> options)
            : base(options) { }

        public DbSet<Entertainer> Entertainers { get; set; }
        public DbSet<Engagement> Engagements { get; set; }

    }
}
