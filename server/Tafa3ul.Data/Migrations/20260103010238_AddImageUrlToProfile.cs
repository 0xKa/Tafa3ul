using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Tafa3ul.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddImageUrlToProfile : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Profiles",
                type: "character varying(255)",
                maxLength: 255,
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Profiles");
        }
    }
}
