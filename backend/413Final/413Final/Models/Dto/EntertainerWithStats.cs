namespace _413Final.Models.Dto
{
    public class EntertainerWithStats
    {
        public int EntertainerID { get; set; }
        public string? EntStageName { get; set; }
        public int BookingCount { get; set; }
        public string? LastBookingDate { get; set; } // Use string or DateTime depending on what's in the DB
    }
}
