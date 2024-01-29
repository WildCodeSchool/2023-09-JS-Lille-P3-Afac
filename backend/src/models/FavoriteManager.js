const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  async read(id) {
    const [favorites] = await this.database.query(
      `SELECT * FROM ${this.table}
        WHERE user_id_lu = ?`,
      [id]
    );

    return favorites;
  }

  async add(userId, artworkId) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id_lu, artwork_id)
    VALUES(?, ?)`,
      [userId, artworkId]
    );

    return result.insertId;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = FavoriteManager;
