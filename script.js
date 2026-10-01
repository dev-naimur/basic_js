

console.log("hello world");
document.getElementById("heading").innerHTML="hello World";

// variable 

let x = 10;
let y = 12;
let z = x+y;
document.write(z);

{
    let x = 5;
    document.write(x);
}
document.write(x);

var firstName = "Naimur";
var firstName = "Rahman";

document.write(firstName +"<br>");

// string

let name = "Naimur Rahman";
let age = 25;
document.write(`My name is ${name} and I am ${age} Years Old`);


//Numbers

let num = 10;
document.write("<br>"+num);

// Boolean

let isLoggedIn = true;
let idAdimn = false;
document.write(isLoggedIn , idAdimn);

// undifined

let a;
document.write(a);

//Null

let n = null;
document.write(n);

// Object 

let user = {
    name:"Naimur Rahman",
    age :25,
    address:"Kushtia , Bangladesh"
}
document.write(user.name);
document.write(user.address);

// Array

let skill = [
    "HTML",
    "CSS",
    "JavaScript"
]
document.write(skill[1] +"<br>");

// Operators
let number = 10;

if (number % 2 === 0) {
    console.log("Even");
}else(console.log("Odd"));


// Add

let num1 = 10;
let num2 = 20;

document.write (num1 + num2 +"<br>"); // add
document.write(num1 - num2 +"<br>"); // sub
document.write(num1 * num2 +"<br>"); // multipy
document.write(num1 / num2 +"<br>"); // div
document.write(num1 % num2 +"<br>"); // modulus
document.write(num1 ** num2 +"<br>"); // exponention
document.write(num1++  +"<br>") // increment
document.write(num2 --  +"<br>") // decrement


x += 5;
console.log(x);

document.write(x == 8); // equal to
x === 10; // equal value and equal type
x === "5" 
x != 8 ; // not equal
x !== 10 // not equal value not equal type
x > 12 // getter than
x < 12 // less than

x >= 10 // getter than or equal to
x <= 12 // less than or equal to

// if else statement

let marks = 60;

if(marks >=80 && marks <= 100){
    document.write("Your Grade Is A+");
}else if(marks >=70 && marks < 80){
    document.write("Your Grade Is A")
}else if(marks >=60 && marks <70){
    document.write("Your Grade Is B+")
}else{
    document.write("Your Grade Is F")
}

let price = 450;
let discount = 200 ;

if(price >=1000){
    document.write("Discount Available")
}else{
    document.write("No Discount");
}

let day = "wednesday";

switch(day){
    case "sunday":
        document.write("Working Day");
        break;
    
    case "monday":
        document.write("Rainy Day");
        break;

    case "wednesday":
        document.write("gvt holiday");
        break;

    default:
        document.write("Unknown Day");
    
}


// For Loop

let i = 0;

for(i=0 ; i<9; i++){
  
    if(i === 3 || i===4 || i===5  ){
        continue;
    }
    if(i ===8){
        break;
    }
  document.write("<br>"+"Your Number" +i );
}

// while Loop

let w = 0;
while(w<9){
    if(w === 5){
        break;
    }
    document.write("<br>"+"While Loop :" + w);
    w++;
}

// do while loop

let dw = 0;
do{
    document.write("<br>"+"Do while Loop :" + dw );
    dw ++;
}while(dw<9);