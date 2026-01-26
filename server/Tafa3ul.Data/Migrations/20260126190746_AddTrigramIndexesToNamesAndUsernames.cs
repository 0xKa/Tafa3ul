using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Tafa3ul.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddTrigramIndexesToNamesAndUsernames : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
                @"CREATE EXTENSION IF NOT EXISTS pg_trgm;"
            );

            // Search index (NOT unique)
            migrationBuilder.CreateIndex(
                name: "IX_Users_Username_Trgm",
                table: "Users",
                column: "Username")
                .Annotation("Npgsql:IndexMethod", "GIN")
                .Annotation("Npgsql:IndexOperators", new[] { "gin_trgm_ops" });

            migrationBuilder.CreateIndex(
                name: "IX_Profiles_FirstName_Trgm",
                table: "Profiles",
                column: "FirstName")
                .Annotation("Npgsql:IndexMethod", "GIN")
                .Annotation("Npgsql:IndexOperators", new[] { "gin_trgm_ops" });

            migrationBuilder.CreateIndex(
                name: "IX_Profiles_LastName_Trgm",
                table: "Profiles",
                column: "LastName")
                .Annotation("Npgsql:IndexMethod", "GIN")
                .Annotation("Npgsql:IndexOperators", new[] { "gin_trgm_ops" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex("IX_Users_Username_Trgm", "Users");
            migrationBuilder.DropIndex("IX_Profiles_FirstName_Trgm", "Profiles");
            migrationBuilder.DropIndex("IX_Profiles_LastName_Trgm", "Profiles");

            migrationBuilder.Sql(
                @"DROP EXTENSION IF EXISTS pg_trgm;"
            );
        }
    }
}
