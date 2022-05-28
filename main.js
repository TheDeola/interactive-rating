// This is my Javascript file

const ratings = document.querySelector(".button"); 
// console.log(ratings);

const ratingsText = document.getElementById("ratingsText");
// console.log(ratingsText);

const button = document.querySelector("button");
console.log(button);

const btns = document.querySelectorAll(".btn");
console.log(btns);

let reviewText = 0;
let currentBtn

btns.forEach(function(btn){
    btn.addEventListener("click", function(){
        btn.classList.add("review");
        reviewText = btn.innerHTML;
        currentBtn = btn;
    })
})

button.addEventListener("click", function(){
    ratingsText.innerHTML = reviewText;
    currentBtn.classList.toggle("review");
})


$(document).ready(function(){
    $("#subMit").click(function(){
        $(".container1").hide();
        $(".container2").show();
    })
})