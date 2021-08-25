// break using while loop
// var i = 0;
// while (i < 15) {
//   console.log(i);
//   if (i == 6) {
//     break;
//   }
//   i++;
// }
// break using for loop
// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   if (i == 3) {
//     break;
//   }
// }
// break using array
var numbers = [10, 40, 60, 100, 200, 300, 400, 500];
// for(var i=0; i<numbers.length; i++){
   
//     console.log(numbers[i]);
//     if(numbers[i]>=40){
        
//         break;
        
//     }
// }
for (var i=0; i<numbers.length; i++){
    var number = numbers[i];
    if(number>100){
        continue;
    }
    console.log(number);
}
