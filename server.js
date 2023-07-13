//jshint esversion:6

const express = require("express");

const app = express();

const date = require(__dirname + "/date.js"); //свойство node объявлять модули,  date.js

//console.log(date);// выводит данные из export в date.js в консоли
//console.log(date()); //экспортирует запуск функции

const items = ["Buy Food", "Cook food", "Eat Food"]; //todo list, const подходит для ненового массива
const workItems = []; //для создания нового списка на стр work

app.set('view engine', 'ejs'); //подключаем ejs, доп. создаем папку views

app.use(express.urlencoded({ extended: true })); //instead of body-parser, which is not nessasary in new version express
app.use(express.static("public")); //добавляет папку public к нашему проекту (обычный способ в express не работает)

app.get("/", function(req, res){

 //let day = date(); //из созданного модуля date.js вызываеим функцию
 const day = date.getDate();
 //или let day = date.getDay();


    res.render('list', {listTitle: day, newListItems: items}); //ejs method, render a file list and find kindOfDay variable and set the value of day
    
});

app.post("/", function(req, res){

// console.log(req.body);
let item = req.body.newItem; //stores user input (name = newItem) in variable 'item'

//определяем к какому списку дел относится, с помощью value у кнопки
if (req.body.list === "Work") {
  workItems.push(item);
  res.redirect("/work");
} else {
  items.push(item); //создает массив из наших дел  

  res.redirect("/"); //после получения значения перенаправляет нас в начало app.get и render 2 gthtvtyys[ (+ newListItem)]
  
}


});

// создаем новую стр с заголовком work 
app.get("/work", function(req,res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
})

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

//объявляем about стр
app.get("/about", function(req, res){
res.render("about");
})


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
