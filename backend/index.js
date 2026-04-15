const express = require("express");
const { Client } = require("pg");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
const port = 8086;
app.use(cors());

const con = new Client({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "machine",
  password: process.env.DB_PASSWORD,
});

con
  .connect()
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Welcome to backend");
});

//----------------------Category----------------------------
// Add category
app.post("/categories", async (req, res) => {
  const { name } = req.body;
  try {
    const result = await con.query(
      "INSERT INTO categories(name) VALUES ($1) RETURNING *",
      [name],
    );
    res.send(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error Category not add",
    });
  }
});

// View categories
app.get("/categories", async (req, res) => {
  try {
    const result = await con.query("SELECT * FROM categories");
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error Cant view categories",
    });
  }
});
// Update category
app.patch("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await con.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [name, id],
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error category can't edit",
    });
  }
});
// Delete category
app.delete("/categories/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await con.query(
      "DELETE FROM categories WHERE id = ($1) RETURNING *",
      [id],
    );
    res.json({
      message: "Catrgory Deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error category can't delete ",
    });
  }
});

//----------------------Product----------------------------
//create product
app.post("/products", async (req, res) => {
  const { name, category_id } = req.body;
  try {
    const result = await con.query(
      "INSERT INTO products(name, category_id) VALUES ($1,$2) RETURNING *",
      [name, category_id],
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error Product Failed to create",
    });
  }
});
//view product
app.get("/products", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const offset = (page - 1) * limit;

  try {
    const result = await con.query(
      `SELECT 
        p.id AS product_id,
        p.name AS product_name,
        c.id AS category_id,
        c.name AS category_name
       FROM products p
       LEFT JOIN categories c 
       ON p.category_id = c.id
       ORDER BY p.id
       LIMIT $1 OFFSET $2`,
      [limit, offset],
    );

    res.json({
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error Can't Fetch Products",
    });
  }
});
//update product
app.patch("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await con.query(
      "UPDATE products SET name = $1 WHERE id = $2 RETURNING * ",
      [name, id],
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error Can't Edit product",
    });
  }
});
//delete product
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await con.query(
      "DELETE FROM products WHERE id = ($1) RETURNING *",
      [id],
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error can't delete product",
    });
  }
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
