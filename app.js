//jshint esversion:6

const express = require("express");

const app = express();

app.set('view engine', 'ejs'); //подключаем ejs, доп. создаем папку views

app.get("/", function(req, res){

    let today = new Date();
   
    let options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };

    let day = today.toLocaleDateString('en-US', options);

    res.render('list', {kindOfDay: day}); //ejs method, render a file list and find kindOfDay variable and set the value of day

    
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
