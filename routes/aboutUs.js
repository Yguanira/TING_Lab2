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
    const result = await client.query("SELECT * FROM company_employees_table WHERE job ~* '^direct ?\d' AND WHERE job = CEO ");
    const results = { 'results': (result) ? result.rows : null};
    res.render('servicios', { title: "Sobre nosotros", executiveCommittee: results } );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

module.exports = router;
