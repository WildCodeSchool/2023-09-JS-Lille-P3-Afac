const AbstractManager = require("./AbstractManager");

class ArtworkManager extends AbstractManager {
  constructor() {
    super({ table: "artwork" });
  }

  async createArtwork(artwork) {
    const [result] = await this.database.query(
      `INSERT INTO artwork (title, technique, artwork_year, format, source, alt, user_id_ar) 
      VALUES(?, ?, ?, ?, ?, ?, ?)`,
      [
        artwork.title,
        artwork.technique,
        artwork.artwork_year,
        artwork.format,
        artwork.source,
        artwork.alt,
        artwork.user_id_ar,
      ]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }
}

module.exports = ArtworkManager;
