using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Tafa3ul.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddTrigramIndexToPostsContent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Enable extension (required for gin_trgm_ops)
            migrationBuilder.Sql(@"CREATE EXTENSION IF NOT EXISTS pg_trgm;");

            // Create trigram GIN index on Posts.Content
            migrationBuilder.CreateIndex(
                name: "IX_Posts_Content_Trgm",
                table: "Posts",
                column: "Content")
                .Annotation("Npgsql:IndexMethod", "GIN")
                .Annotation("Npgsql:IndexOperators", new[] { "gin_trgm_ops" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Posts_Content_Trgm",
                table: "Posts");

            migrationBuilder.Sql(@"DROP EXTENSION IF EXISTS pg_trgm;");
        }
    }
}
