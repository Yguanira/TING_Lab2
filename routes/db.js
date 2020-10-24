const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

var express = require('express');
var router = express.Router();

/* GET db page. */
router.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT products_table.id, products_table.name, categories_table.name as category_name, products_table.imageurl, products_table.description FROM products_table INNER JOIN categories_table ON products_table.category_id = categories_table.id');
    const results = { 'results': (result) ? result.rows : null};
    res.render('db', { title: "Productos", products: results } );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

module.exports = router;