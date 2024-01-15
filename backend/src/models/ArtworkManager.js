const AbstractManager = require("./AbstractManager");

class ArtworkManager extends AbstractManager {
  constructor() {
    super({ table: "anecdote" });
  }

  async readAnecdote(id) {
    const [rows] = await this.database.query(
      `select * from anecdote where artwork_id = ?`,
      [id]
    );

    return rows;
  }
}

module.exports = ArtworkManager;
