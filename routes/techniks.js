var express = require('express');
// const { Technology } = require('../models/technology');
var router = express.Router();
var technologies = require('../models/technology').technologies;
var checkAuth = require("../middlewares/checkAuth.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с technologies');
});

// // Страница после слеша /techniks/....
// router.get("/:nick", function(req, res, next) {
//     res.send(req.params.nick);
// });


// Страница technology
router.get("/:nick", checkAuth, async function(req, res, next) {
    var technologies = await technology.find({nick: req.params.nick});
    console.log(technologies)
    if(!technologies.length) return next(new Error("Нет такой модели, в разработке."))
        var technology = technologies[0];
        res.render('techniks', {
            title: technology.title,
            picture: technology.avatar,
            desc: technology.desc
        }) 
});

module.exports = router;
