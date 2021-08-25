// here taka is function  parameter
function bringSingara(taka){
    console.log('Buy Sinagara With This Budget : ',taka);
    console.log('Mama Singara Den');
    var singaraPrice = 10;
    var singaraQuantity = taka/singaraPrice;
    return singaraQuantity;
}
// here money value 500 here 500 is argument
var money = 500;

var singara = bringSingara(money);
console.log('You will get singara : ', singara);