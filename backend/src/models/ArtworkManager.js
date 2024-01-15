const AbstractManager = require("./AbstractManager");

class ArtworkManager extends AbstractManager {
  constructor() {
    super({ table: "artwork" });
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = ArtworkManager;
