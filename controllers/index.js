var express = require('express');
var router = new express.Router();
// var path = require('path');

router.use("/index", require("./films"));

router.get('/', function(req, res){
  res.sendFile("/Users/Fiona1/Desktop/codeclan_work/week_13/day_1/homework_start_point/client/build/index.html");
});



module.exports = router;
