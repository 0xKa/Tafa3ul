using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Tafa3ul.Data.Migrations
{
    /// <inheritdoc />
    public partial class RemoveImgUrlFromProfile : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Profiles");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Profiles",
                type: "character varying(255)",
                maxLength: 255,
                nullable: true);
        }
    }
}
