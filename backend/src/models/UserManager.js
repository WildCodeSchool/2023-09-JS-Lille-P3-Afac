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
}

module.exports = UserManager;
