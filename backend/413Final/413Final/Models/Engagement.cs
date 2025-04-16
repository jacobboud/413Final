using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace _413Final.Models
{
    public class Engagement
    {
        [Key]
        public int EngagementNumber { get; set; }

        public string? StartDate { get; set; }
        public string? EndDate { get; set; }
        public string? StartTime { get; set; }
        public string? StopTime { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? ContractPrice { get; set; }

        public int? CustomerID { get; set; }
        public int? AgentID { get; set; }

        // This is the foreign key to the Entertainer
        public int? EntertainerID { get; set; }
    }
}
