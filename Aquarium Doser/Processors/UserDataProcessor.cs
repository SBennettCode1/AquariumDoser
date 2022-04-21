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

        public async Task<bool> DeleteUserDataById(Guid userDataId)
        {
            using (var context = contextFactory.GetContext())
            {
                var selectedData = await context.UserDataObjects.FirstOrDefaultAsync(ud => ud.ID == userDataId);
                context.UserDataObjects.Remove(selectedData);
                await context.SaveChangesAsync();
                return true;
            }
        }
    }
}
