// switch case if our targeted conditon find then directly jump into that area where matchong condion
// bt if else check one by one first to last, in that case switch case e working quick result
var color = "red";
switch(color){
    case 'blue':
        console.log('Color is Blue');
        break;
    case 'green':
        console.log('Color is Green');
        break;
    case 'dark':
        console.log('Color is Dark');
        break;
    case 'white':
        console.log('Color is White');
        break;
        // we can check two conditon like this way
    case 'red':
    case 'darkblue':
        console.log('Color is Red');
        break;
        default:
            console.log('No Color Selected');
}