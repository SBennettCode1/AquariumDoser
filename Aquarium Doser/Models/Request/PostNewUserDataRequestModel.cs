using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aquarium_Doser.Models.Request
{
    public class PostNewUserDataRequestModel
    {
        public string Name { get; set; }
        public decimal Volume { get; set; }
        public string VolumeUnits { get; set; }
        public decimal Quantity { get; set; }
        public string QuantityUnits { get; set; }
        public string Email { get; set; }
    }
}
