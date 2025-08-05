const reviews = [
    {   id: 1,
        name: 'susan smith',
        img: '#',
        text:
    },
]

{
    id: 3,
    name: 'Anna Smith',
    img: '#',
    text:'
}









const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn')

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function(){
const item = reviews[currentItem];
img.src = item.img;
author.textContent = item.name;
job.textContent = item.job;
info.textContent = item.text;
});

function showPerson(person){
    const item = reviews[person];
img.src = item.img;
author.textContent = item.name;
job.textContent = item.job;
info.textContent = item.text;
}

nextBtn.addEventListener('click', function({
currentItem++;
if (currentItem > reviews.length - 1){
    currentItem = 0;
}
showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
currentItem--;
if (currentItem < 0){
    currentItem = reviews.length -1;
}
showPerson(currentItem);
});







console.log("Hello World");

let chicken="123";
console.log(chicken);
console.log(typeof chicken);

console.log(10+"eggs");
console.log(10 + 8 + "eggs");
console.log("eggs "+ 10 +8)

//Both Conditions Need to be True
console.log(7>3)&&(10>8);

//Only one condition must be true
console.log(10>3)||(5>10)

//If the statenent is logical or not
console.log(!5>3);


const hour = new Date().getHours();
let greeting = "";

if (hour<12){
    greeting="Good Morning";
}else if (hour<18){
    greeting="Good Afternoon";
}else{
    greeting="Good Evening";
}

document.getElementById("greeting").innerText = greeting;
