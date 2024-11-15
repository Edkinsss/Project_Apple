var Technology = require("../models/technology").Technology;


module.exports = async function(req,res,next){
    res.locals.nav = []


   var menu =  await Technology.find(null,{_id:0,title:1,nick:1});
   console.log(menu);
   if (menu.length) {
    res.locals.nav = menu;
   }
   next(); 
}
