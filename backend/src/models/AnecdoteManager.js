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

  async readAnecdote(id) {
    const [rows] = await this.database.query(
      `select * from anecdote where artwork_id = ?`,
      [id]
    );

    return rows;
  }

  async updateAnecdote(anecdote, id) {
    const [rows] = await this.database.query(
      `UPDATE anecdote SET fact = ?, artwork_id = ? WHERE id = ?`,
      [anecdote.fact, anecdote.artwork_id, id]
    );
    return rows;
  }
}

module.exports = AnecdoteManager;
