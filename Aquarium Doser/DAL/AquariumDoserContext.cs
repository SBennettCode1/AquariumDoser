using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aquarium_Doser.Models;
using Microsoft.EntityFrameworkCore;
namespace Aquarium_Doser.DAL
{
    public class AquariumDoserContext : DbContext
    {
        public AquariumDoserContext(DbContextOptions options) : base(options) { }

        public DbSet<DefaultData> DefaultDataObjects { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<DefaultData>(entity =>
            {
                entity.ToTable("default_data", schema: "dbo").HasKey(k => k.ID);
                entity.Property(dd => dd.ID).HasColumnName("id").IsRequired(true);
                entity.Property(dd => dd.Name).HasColumnName("name").IsRequired(true);
                entity.Property(dd => dd.Volume).HasColumnName("volume").IsRequired(true);
                entity.Property(dd => dd.VolumeUnits).HasColumnName("volume_units").IsRequired(true);
                entity.Property(dd => dd.Quantity).HasColumnName("quantity").IsRequired(true);
                entity.Property(dd => dd.QuantityUnits).HasColumnName("quantity_units").IsRequired(true);
            });

            base.OnModelCreating(modelBuilder);

        }
    }
}
