//jshint esversion:6

//console.log(module);

//module.exports = "Hello World";//экспортирует эти данные

//module.exports = getDate;//экспортирует function


// module.exports.getDate = getDate;
// var getDate = function() {
//short запись

exports.getDate = function() {

    const today = new Date();
   
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };
    
    return today.toLocaleDateString('en-US', options);

}

exports.getDay = function() {
  const today = new Date();
 
  const options = {
    weekday: "long",
      };
  
      return today.toLocaleDateString('en-US', options);

}

//console.log(module.exports);