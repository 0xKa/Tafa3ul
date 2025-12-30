using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Tafa3ul.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddAnExtraPropForExperience : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsCurrentlyWorkingHere",
                table: "Experiences",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsCurrentlyWorkingHere",
                table: "Experiences");
        }
    }
}
