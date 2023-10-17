//document selectors
const btn_performOperation = document.querySelector(".debuton");
const txt_addition = document.querySelector(".score.addition");
const txt_subtraction = document.querySelector(".score.subtraction");
const txt_multiplication = document.querySelector(".score.multiplication");
const txt_division = document.querySelector(".score.division");

//pseudo main
btn_performOperation.addEventListener("click", performOperations);

//functions
function performOperations(){
    add();
    subtract();
    multiply();
    divide();
}

function add(){
    let principal = parseInt(txt_addition.textContent);
    principal += 2;
    txt_addition.innerHTML = principal;
}
function subtract(){
    let principal = parseInt(txt_subtraction.textContent);
    principal -= 2;
    txt_subtraction.innerHTML = principal;
}
function multiply(){
    let principal = parseInt(txt_multiplication.textContent);
    principal *= 2;
    txt_multiplication.innerHTML = principal;
}
function divide(){
    let principal = parseInt(txt_division.textContent);
    principal /= 2;
    txt_division.innerHTML = principal;
}

/* 
TO TRY:
are DOM selectors references? if I edit an identical selectors what would happen?
*/