const request = require("supertest");
const app = require("../../src/app");
const tables = require("../../src/tables");

describe("GET /api/artwork", () => {
  it("should fetch artworks successfully", async () => {
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

    const response = await request(app).get("/api/artwork");

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);

    const foundArtwork = response.body.find(
      (artwork) => artwork.id === insertId
    );

    expect(foundArtwork).toBeInstanceOf(Object);
    expect(foundArtwork.title).toBe(testArtwork.title);
    expect(foundArtwork.technique).toBe(testArtwork.technique);
    expect(foundArtwork.artwork_year).toBe(testArtwork.artwork_year);
    expect(foundArtwork.format).toBe(testArtwork.format);
    expect(foundArtwork.source).toBe(testArtwork.source);
    expect(foundArtwork.alt).toBe(testArtwork.alt);
    expect(foundArtwork.user_id_ar).toBe(testArtwork.user_id_ar);
  });
});
