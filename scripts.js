function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let total;
let clicksPerSecond = 0;
let incrementValue = 0;
let cursor = 0;
let isCursor = false;
// let incrementIncreaseTimer;

if (localStorage.getItem('storageTotal')) {
    total = parseInt(localStorage.getItem('storageTotal'));
} else {
    total = 0;
}

const autoSave = () => {
    localStorage.setItem('storageTotal', total);
    document.getElementById('total').innerHTML = total;
};

const increment = () => {
    clicksPerSecond = cursor;
    document.getElementById('money-per-second').innerHTML = clicksPerSecond;
    total += incrementValue;
    autoSave();
};

let incrementIncreaseTimer = setInterval(increment, 1000);

const clickIncrement = () => {
    total += 1;
    increment();
};

const cursorIncrement = () => {
    cursor += 1;
    incrementValue += 1;
    document.getElementById('cursor-total').innerHTML = cursor;
    increment();
};

document
    .getElementById('click-increase')
    .addEventListener('click', clickIncrement);

document.getElementById('total').innerHTML = total;

document
    .getElementById('cursor-increase')
    .addEventListener('click', cursorIncrement);
