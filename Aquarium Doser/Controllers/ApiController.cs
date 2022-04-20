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
        private readonly UserDataProcessor userDataProcessor;


        public ApiController()
        {
            defaultDataProcessor = new DefaultDataProcessor();
            userDataProcessor = new UserDataProcessor();
        }
        
        [HttpGet]
        [Route("data")]
        public async Task<IActionResult> DefaultData()
        {
            return Json(await defaultDataProcessor.GetDefaultData());
        }

        [HttpGet]
        [Route("UserDataByEmail")]
        public async Task<IActionResult> UserDataByEmail(string email)
        {
            return Json(await userDataProcessor.GetUserDataByEmail(email));
        }
    }
}
