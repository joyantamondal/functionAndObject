console.log('--------Addition Two Number--------');
function addTwoNumbers(number1, number2){
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}
var firstNumber = 1000;
var secondNumber = 1500;
var sumOfTotal = addTwoNumbers(firstNumber, secondNumber);
console.log("Total = ", sumOfTotal);
console.log('--------Multiplicatiob Two Number-------');
function multiTwoNumbers(num1, num2){
    console.log(num1, num2);
    var result = num1 * num2;
    return result;
}
var n1= 20, n2= 30;

var multiResult = multiTwoNumbers(n1,n2);
console.log('Multiplication Result: ', multiResult);