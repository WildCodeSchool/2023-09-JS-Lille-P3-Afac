const tables = require("../../src/tables");
const database = require("../../database/client");

describe("Create artwork", () => {
  it("should create an artwork successfully", async () => {
    const testArtwork = {
      title: "Sample Artwork",
      technique: "Dessin",
      artwork_year: 1999,
      format: "200 x 200",
      source: "Artwork Source",
      alt: "Artwork alt",
      user_id_ar: 2,
    };

    const insertId = await tables.artwork.create(testArtwork);

    const [rows] = await database.query(
      "select * from artwork where id = ?",
      insertId
    );

    const foundArtwork = rows[0];

    expect(foundArtwork).toBeDefined();
    expect(foundArtwork.title).toBe(testArtwork.title);
  });
});
