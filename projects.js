// basic shopping card calculetor

/*  let productPrice = 5000;

let firstDiscountPrice = productPrice * 20/100;
let secondDiscountPrice = productPrice * 15/100;
let thirdDiscountPrice = productPrice * 10/100;

let totalPrice;
let disCountRate;

if(productPrice >= 5000 ){
    disCountRate = 20;
    totalPrice = productPrice - firstDiscountPrice;
    
}else if(productPrice >= 3000){
    disCountRate = 15;
    totalPrice = productPrice - secondDiscountPrice;
    
}else if (productPrice >=1000){
    disCountRate = 10;
    totalPrice = productPrice - thirdDiscountPrice;
  
}else{
    disCountRate = 0;
    totalPrice = productPrice;
    
}

let disCountAmount = productPrice - totalPrice;

document.write("<br>"+"Product Price :" + productPrice);
document.write("<br>"+"Discount :" + disCountRate + "%");
document.write("<br>" + "Discount Amount :" + disCountAmount);
document.write("<br>"+"Total Price :" + totalPrice);

*/


let productPrice = 5000;

let disCountRate;

if(productPrice >= 5000){
    disCountRate = 20;
}else if(productPrice >= 3000){
    disCountRate = 15;
}else if(productPrice >= 1000){
    disCountRate = 10;
}else{
    disCountRate = 0;
}

let disCountAmount = productPrice * disCountRate /100;
let totalPrice = productPrice - disCountAmount;

document.write("<br>" + "Product Price : " + productPrice);
document.write("<br>" + "Discount :" + disCountRate + "%");
document.write("<br>" + "Discount Amount :"+ disCountAmount);
document.write("<br>" + "Total Price :"+ totalPrice + "<br>");

// student Result System 

let marks = 10;


if(marks >= 80 && marks <= 100){
    document.write("Grade Is: A+ ");
}else if(marks >=70 && marks < 80){
    document.write("Grade Is: A");
}else if(marks >= 60 && marks <70 ){
    document.write("Your Grade is: A-");
}else if(marks >=50 && marks <60){
    document.write("Your Grade Is : B");
}else if (marks >= 40 && marks <50){
    document.write("Your Grade Is : D");
}else if(marks >=33 && marks <40){
    document.write("Your Grade Is : C");
}else{
    document.write("Your Grade Is : F");
}

if(marks >= 33 && marks <= 100){
    document.write("<br>"+"Status : Passed");
}else{
    document.write("<br>"+"Status : Fail" +"<br>");
}

// Log In System

let useerName = "Naimur Rahman";
let password = "Durjoy12";

if (useerName === "Naimur Rahman" && password === "Durjoy12"){
    document.write("Log In SuccessFull");
}else{
    document.write("Invalid user name or password");
}

// Number Analyzer

let num = 13;

if(num > 0){
    document.write("Possitive Number");
}else if (num < 0 ){
    document.write("Negetive Number");
}else{
    document.write("Number is Zero");
}

if(num % 2 === 0){
    document.write("Number is Even");
}else{
    document.write("Number is Odd" +"<br>");
}

// Mini Atm

let withdrawBalance = 6000;
let balance = 10000;

if(withdrawBalance <= balance){

    balance = balance-withdrawBalance;

    document.write("Withdraw SuccessFull"+"<br>");
    document.write("Withdraw Balance :" + withdrawBalance+"<br>");
    document.write("Remaining Balance :"+ balance);


}else{
    document.write("Insuficiant Balance");
}

