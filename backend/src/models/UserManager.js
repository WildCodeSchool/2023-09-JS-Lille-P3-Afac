const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select id, lastname, firstname, email, src from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async createUser(user) {
    try {
      await this.database.query("START TRANSACTION");
      const [result] = await this.database.query(
        `INSERT INTO ${this.table}(lastname, firstname, email, src, password_hash) VALUES (?, ?, ?, ?, ?)`,
        [
          user.lastname,
          user.firstname,
          user.email,
          user.src,
          user.password_hash,
        ]
      );
      const userId = result.insertId;

      await this.database.query("INSERT INTO logged_user(user_id) VALUES(?)", [
        userId,
      ]);
      await this.database.query("COMMIT");
      return userId;
    } catch (error) {
      await this.database.query("ROLLBACK");
      return error;
    }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT id, lastname, firstname, email, src 
      FROM ${this.table}`
    );

    return rows;
  }
}

module.exports = UserManager;
