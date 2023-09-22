const pool = require("../db");
class UserController {
  async createUser(req, res) {
    const { name, surname } = req.body;
    console.log(name, surname);
    const newPersone = await pool.query(
      `INSERT INTO persone (name, surname) values ($1,$2) RETURNING *`,
      [name, surname]
    );
    res.json(newPersone.rows);
  }

  async getUsers(req, res) {
    const users = await pool.query(`SELECT * FROM persone `);
    res.json(users.rows);
  }

  async getOneUser(req, res) {
    const id = req.params.id;
    const user = await pool.query("SELECT * FROM persone where id = $1 ", [id]);
    res.json(user.rows[0]);
  }

  async updateUser(req, res) {
    const { id, name, surname } = req.body;
    const user = await pool.query(
      "UPDATE persone set name = $1, surname = $2 where id = $3 RETURNING *",
      [name, surname, id]
    );
    res.json(user.rows[0]);
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await pool.query("DELETE FROM persone where id = $1 ", [id]);
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
