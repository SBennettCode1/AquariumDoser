using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace Aquarium_Doser.DAL
{
    public class ContextFactory
    {
        private DbContextOptions GetDbContextOptions<T>(string connectionString) where T : DbContext
        {
            var optionsBuilder = new DbContextOptionsBuilder<T>();
            optionsBuilder.UseSqlServer(connectionString);
            optionsBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            return optionsBuilder.Options;
        }

        public AquariumDoserContext GetContext()
        {
            return new AquariumDoserContext(GetDbContextOptions<AquariumDoserContext>("Server=tcp:aqudose.database.windows.net,1433;Initial Catalog=AquariumDoser;Persist Security Info=False;User ID=sam;Password=N?5MyFT=cwsxS5=O;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"));
        }
    }
}
