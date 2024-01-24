const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  constructor() {
    super({ table: "artist" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT artist.id, biography, lastname, firstname, src FROM ${this.table} INNER JOIN user ON user.id = artist.user_id`
    );
    return rows;
  }

  async readArtist(id) {
    const [rows] = await this.database.query(
      `SELECT artist.id, biography, lastname, firstname, src FROM ${this.table} INNER JOIN user ON user.id = artist.user_id WHERE artist.id = ?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = ArtistManager;
