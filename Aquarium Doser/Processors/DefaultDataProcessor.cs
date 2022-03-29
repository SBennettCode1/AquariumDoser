using Aquarium_Doser.DAL;
using Aquarium_Doser.Models;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace Aquarium_Doser.Processors
{
    public class DefaultDataProcessor
    {
        private readonly ContextFactory contextFactory;
        public DefaultDataProcessor()
        {
            contextFactory = new ContextFactory();
        }

        public async Task<List<DefaultData>> GetDefaultData()
        {
            using (var context = contextFactory.GetContext())
            {
                return await context.DefaultDataObjects.ToListAsync();
            }
        }
    }
}
