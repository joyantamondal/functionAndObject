var computer = {
    price: 80000,
    storage: '1TB',
    processor: "intel i5"
};
// full object property print
console.log(computer);
//single propery print from an object
console.log(computer.price);
// another way single propery print from an object
var processorRead = computer.processor;
console.log(processorRead);
// set an object property value, now price set 5000
computer.price = 5000;
// after change price our object new properties will show this console
console.log(computer);
// another way to set a value of an object property now storage property set 2gb
computer["storage"]= "2TB";
console.log(computer);
// another way set an object property also change  value 
var processorProperty = "processor";
computer[processorProperty]= "Core i7";
console.log(computer);

// add extra property and value  into an objects 
var processorProperty = "processor";
computer["processorProperty"]= "Core i7";
console.log(computer);

