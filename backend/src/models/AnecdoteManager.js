const AbstractManager = require("./AbstractManager");

class AnecdoteManager extends AbstractManager {
  constructor() {
    super({ table: "anecdote" });
  }

  async create(anecdote) {
    const [result] = await this.database.query(
      `INSERT INTO anecdote (fact, artwork_id) VALUES(?, ?)`,
      [anecdote.fact, anecdote.artwork_id]
    );
    return result.insertId;
  }
}

module.exports = AnecdoteManager;
