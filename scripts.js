function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let total;
let incrementValue = 0;
// let cursor = 0;
// let incrementIncreaseTimer;

if (localStorage.getItem('storageTotal')) {
    total = parseInt(localStorage.getItem('storageTotal'));
} else {
    total = 0;
}

const increment = () => {
    total += incrementValue;
    autoSave();
};

let incrementIncreaseTimer = setInterval(increment, 1000);

const clickIncrement = () => {
    total += 1;
    autoSave();
};

const cursorIncrement = () => {
    incrementValue += 1;
    // console.log(cursor);
    console.log(incrementValue);
};

const autoSave = () => {
    localStorage.setItem('storageTotal', total);
    document.getElementById('total').innerHTML = total;
};

const stopIncrement = () => {
    clearInterval(incrementIncreaseTimer);
};

document
    .getElementById('click-increase')
    .addEventListener('click', clickIncrement);

document.getElementById('total').innerHTML = total;

document
    .getElementById('stopIncrementButton')
    .addEventListener('click', stopIncrement);

document
    .getElementById('cursor-increase')
    .addEventListener('click', cursorIncrement);
