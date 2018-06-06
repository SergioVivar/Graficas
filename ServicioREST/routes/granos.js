var express = require('express');
var router = express.Router();
var obj = require("../granos.json");
router.get('/', function(req, res, next) {res.send(obj);});
module.exports = router;
