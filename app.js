//jshint esversion:6

const express = require("express");

const app = express();

let items = ["Buy Food", "Cook food", "Eat Food"]; //todo list

app.set('view engine', 'ejs'); //подключаем ejs, доп. создаем папку views

app.use(express.urlencoded({ extended: true })); //instead of body-parser, which is not nessasary in new version express

app.get("/", function(req, res){

    let today = new Date();
   
    let options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };

    let day = today.toLocaleDateString('en-US', options);

    res.render('list', {kindOfDay: day, newListItems: items}); //ejs method, render a file list and find kindOfDay variable and set the value of day

    
});

app.post("/", function(req, res){
  let item = req.body.newItem; //stores user input (name = newItem) in variable 'item'
  
  items.push(item); //создает массив из наших дел
  

res.redirect("/"); //после получения значения перенаправляет нас в начало app.get и render 2 gthtvtyys[ (+ newListItem)]

})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
