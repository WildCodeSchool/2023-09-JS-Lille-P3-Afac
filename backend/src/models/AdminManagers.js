const AbstractManager = require("./AbstractManager");

class AdminManagers extends AbstractManager {
  constructor() {
    super({ table: "administrator" });
  }

  async addAdmin(newAdmin) {
    const [rows] = await this.database.query(
      `INSERT INTO administrator user_id VALUES (?)`,
      [newAdmin.user_id]
    );
    return rows;
  }
}

module.exports = AdminManagers;
