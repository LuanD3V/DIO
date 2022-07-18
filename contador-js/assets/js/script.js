let currentNumber = document.getElementById("number");
let nextNumber = 0;

function add() {
    nextNumber = nextNumber + 1;
    currentNumber.innerHTML = nextNumber;
}

function sub() {
    nextNumber = nextNumber - 1;
    currentNumber.innerHTML = nextNumber
}