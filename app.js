//jshint esversion:6

const express = require("express");

const app = express();

app.set('view engine', 'ejs'); //подключаем ejs, доп. создаем папку views

app.get("/", function(req, res){

    let today = new Date();
    let currentDay = today.getDay();
    let day = "";

   switch (currentDay) {
    case 0:
        day = "Sunday";
        break;
        case 1:
        day = "Monday";
        break;
        case 2:
        day = "Tuesday";
        break;
        case 3:
        day = "Wednesday";
        break;
        case 4:
        day = "Thursday";
        break;
        case 5:
        day = "Friday";
        break;
        case 6:
        day = "Saturday";
        break;    
       default:
        console.log("Error: current day is equal to: " + currentDay);
   }

    // if (currentDay === 6 || currentDay === 0) {
    //     day = "Weekend";
    //  } else {
    //     day = "Weekday";
    // }

    res.render('list', {kindOfDay: day}); //ejs method, render a file list and find kindOfDay variable and set the value of day

    
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
