$(document).ready(function() {
  $("number1#add1").click (function(event) {
    event.preventDefault()
    var userInput1 = document.getElementById('add1').val()
    var userInput2 = $("#add2").val();
    console.log(userInput1)
   });
});





var add = function(number1, number2) {
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};
