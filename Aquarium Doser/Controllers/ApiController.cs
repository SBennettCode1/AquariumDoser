using Aquarium_Doser.Processors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aquarium_Doser.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {
        private readonly DefaultDataProcessor defaultDataProcessor;

        public ApiController()
        {
            defaultDataProcessor = new DefaultDataProcessor();
        }
        
        private static readonly List<List<string>> defaultData = new List<List<string>> { 
            new List<string> {"Seachem Flourish", "5", "60", "ml", "gallon"}
        };


        [HttpGet]
        [Route("data")]
        public async Task<IActionResult> DefaultData()
        {
            return Json(await defaultDataProcessor.GetDefaultData());
        }
    }
}
