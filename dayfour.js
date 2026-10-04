// js date object 

let day = new Date ();
console.log(day);
console.log(day.getFullYear());
console.log(day.getMonth());
console.log(day.getDay());
console.log(day.getTime());
console.log(day.getHours());

// js math object

let number = 4.6;
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));

console.log(Math.max(10,20,30));
console.log(Math.min(10,20,30));

console.log(Math.random());

// window object

// console.log(window.alert("welcome to my website"));
// console.log(confirm("are you sure ?"));
//console.log(prompt("enter your name "));
console.log(window.innerHeight);
console.log(window.innerWidth);
//window.location.reload();
setTimeout(() => {
    console.log("hello world");
},3000

);

// javascript navigator object

console.log(navigator);
console.log(navigator.userAgent);
console.log(navigator.onLine);
console.log(navigator.language);
console.log(navigator.platform);

// geolocation

navigator.geolocation.getCurrentPosition(function(position){
  
    console.log(position.coords.altitude);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    console.log(position.coords.speed);
    console.log( position.coords.heading);

}

);

// JavaScript Common Events

function sayHello (){
    console.log("Hello World");
}

let input = document.getElementById("name");

input.addEventListener("input",function(name){
    console.log(input.value);
}
)

input.addEventListener("change", function(){
    console.log("Changed");
});




