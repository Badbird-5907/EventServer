var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/deez_nuts',function (req,res){
  res.render('puzzletwo')
});
router.get('/finishedlol',function (req,res){
  res.render('finish')
});

module.exports = router;
export default router;