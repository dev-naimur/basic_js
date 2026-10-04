// day two topic

// Function 

function twoAddNum (){
    let num1 = 10;
    let num2 = 20;
    let numRes = num1 + num2;
    document.write(numRes);
}
twoAddNum();

// Function Parameter

function twoSubNum(num1,num2){
    let subNum = num1 - num2;
    document.write("<br>"+subNum);
}
twoSubNum(20,5 )+"<br>";
twoSubNum(100,15 )+"<br>";
twoSubNum(200,150 )+"<br>";

// Function Return

function getName(){
    return  fName = "Durj";
    
}
let res = getName()+"oy";
document.write("<br>"+res);

function multi(a,b){
    return a*b;
}
let resMul = multi(50,10) /5;
document.write("<br>"+resMul +"<br>");

// Object 

let user = {
    name : "Naimur Rahman",
    id : "Axd124",
    pasword : "Durjoy12@",
    address : "Kushita , Bangladesh"


}

document.write(user.name + "<br>");

// For Loop Object

let car = {
    brandName : "Toyota",
    model : "104XT",
    condition : "Brand New",
    milage : "40 Kmh"
}

let carKeys = Object.keys(car);
for(let i = 0; i < carKeys.length ; i++){

    let key = carKeys[i]
    document.write(carKeys[i] +":"  + car[key]+"<br>");
}

// for in loop

for ( let i in car){
    document.write(i + ":" + car[i]+"<br>");
}

// Array

const name = ["Naimur" , " Rahim " , " Sakib", " Sumon"];
document.write(name[2] +"<br>");

// for loop array

for(i = 0 ; i < name.length ; i++){
    document.write(name[i]+"<br>");
}

// for in loop

let fruits = ["Appale","Banana","Mango"]
for(let i in fruits){
    document.write(fruits[i]);
}