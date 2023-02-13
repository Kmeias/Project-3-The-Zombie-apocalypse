

let optionOne = document.querySelector(".optionOne");

let optionTwo = document.querySelector(".optionTwo");

let option1screen = document.querySelector(".option1screen");

let option2screen = document.querySelector(".option2screen");

let option1end = document.querySelector(".option1end");
let option2end = document.querySelector(".option2end");
let body = document.querySelector("body");
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
optionOne.onclick=function(){
option1screen.style.display="block";
    body.style="background-color: #5A5A5A";
};

optionTwo.onclick=function(){
option2screen.style.display="block";
    body.style="background-color: #5A5A5A";
};


option1screen.onclick=function(){
option1end.style.display="block";
    body.style="background-color: #5A5A5A";
};

option2screen.onclick=function(){
option2end.style.display="block";
    body.style="background-color: #5A5A5A";
};
