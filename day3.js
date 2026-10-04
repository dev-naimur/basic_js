// day 3 topic 

// js Concat 

let frontend = ["HTML" , "CSS", "Javascript"];
let backend = ["PYTHON" , "DJANGO"];

let skill = frontend.concat(backend);
document.write(skill);

// filter  ( specific data collect)

let prices = [100,2000,2500,1500,1000];

let productPrice = prices.filter(function(price){
   return price > 1000;
});

document.write("<br>"+productPrice);

let resultPrice = prices.find(function(price){
    return price > 1000;
});
document.write("<br>"+resultPrice);

// find index ( index ber kore )
let findInd = prices.findIndex(function(price){
    return price >= 2000;
});
document.write("<br>"+findInd);

// ForEach 

let products = ['Mouse',"Monitor","Pendrive"];

products.forEach(function(product){
    document.write("<br>"+"Product :" +  product+"<br>");
    //console.log("Product :" +  product);
});

// includes 
document.write(products.includes("Mouse") +"<br>");

// indexof

document.write(products.indexOf("Mouse"));

// push , pop , reverse

products.push("KeyBoard");
document.write(products);

products.pop();
document.write(products);

products.reverse();
document.write(products);

// slice and sort

let fruits = [
    "Mango",
    "Banana",
    "Orange",
    "Lemon",
    "Guava"
];
let fruitsRes = fruits.slice(1,4);
document.write(fruitsRes);

fruits.sort();
document.write(fruits);

prices.sort();
document.write(prices);

// Splice

let brand = ["Iphone","SumSung","Honor","Motorola"];

brand.splice(1,1);
document.write(brand);

brand.splice(2,0,"Nokia" );
document.write(brand);

brand.splice(3,1,"VIVO");
document.write(brand);

// Strings 

let name = "naimur";
document.write("<br>"+name.toUpperCase());

name.toLowerCase();
document.write(name);

let user = "    Naimur     " // trim
console.log(user);

console.log(user.trim());

let title = " I am Learning Javascript";  // includes
console.log(title.includes("Javascript"));

//  slice
console.log(title.slice(0,5));

console.log(title.replace("Javascript" , "Python")); // replace

// split

console.log(title.split(","));

