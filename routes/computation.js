var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fake_url = "https://fake.com/path" + req.url
  const url = new URL(fake_url)
  const search_params = url.searchParams
  let value =Number(search_params.get("x"))
  if(value == 0)
    value=Math.random()
  res.write("Computes the values for Math.abs, Math.acos(), Math.sin() and Math.sinh() function:"+"\n")
  res.write('Math.abs() applied to '+value+" is "+Math.abs(value,value)+"\n");
  res.write('Math.acos()  applied to '+value+" is "+Math.acos(value)+"\n");
  res.write('Math.sin() applied to '+value+" is "+Math.sin(value)+"\n");
  res.end('Math.sinh() applied to '+value+" is "+Math.expm1(value));
});

module.exports = router;
