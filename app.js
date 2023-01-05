let inputField = document.querySelector(".inputField");
let result = document.querySelector(".result");
let btns = document.querySelectorAll(".btn");

let btnEqual = document.querySelector(".btn-equal");
let clearBtn = document.querySelector(".btn-clear");
let editBtn = document.querySelector(".btn-edit");

btns.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        let value = e.target.dataset.num;

        if(btn.dataset.num){
            inputField.value += value;
        }
    });
    
});


clearBtn.addEventListener('click', clearScreen);

function clearScreen(){
    inputField.value = "";
    result.textContent = "";
}

btnEqual.addEventListener('click', (e) =>{

    if(inputField.value === ""){
        clearScreen();
    }

    if(e.target.click){
        let currentAnswer = eval(inputField.value);
        result.textContent = currentAnswer;
    }

});

 
editBtn.addEventListener('click', (e) => {

    inputField.value = inputField.value.slice(0,-1);

});