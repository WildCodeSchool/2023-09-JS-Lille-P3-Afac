const AbstractManager = require("./AbstractManager");

class FactManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "fact" });
  }

  async create(fact) {
    const [result] = await this.database.query(
      `INSERT INTO fact (fact, artwork_id) VALUES(?, ?)`,
      [fact.fact, fact.artwork_id]
    );
    return result.insertId;
  }
}

module.exports = FactManager;
