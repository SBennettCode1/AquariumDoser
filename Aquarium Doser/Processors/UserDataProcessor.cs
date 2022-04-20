using Aquarium_Doser.DAL;
using Aquarium_Doser.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aquarium_Doser.Processors
{
    public class UserDataProcessor
    {
        private readonly ContextFactory contextFactory;

        public UserDataProcessor()
        {
            contextFactory = new ContextFactory();
        }

        public async Task<List<UserData>> GetUserDataByEmail(string email)
        {
            using (var context = contextFactory.GetContext())
            {
                return await context.UserDataObjects.Where(ud => ud.Email == email).ToListAsync();
            }
        }
    }
}
