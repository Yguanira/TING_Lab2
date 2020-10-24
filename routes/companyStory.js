var express = require('express');
var router = express.Router();

/* ====== GET origin page ====== */
router.get('/', function(req, res, next) {
  res.render('companyStory', { title: 'Origen'}
);
});

module.exports = router;
