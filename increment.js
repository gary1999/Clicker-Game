let total;
let incrementValue = 0;

const stopIncrement = () => {
    clearInterval(incrementIncreaseTimer);
};

const increment = () => {
    total += incrementValue;
    autoSave();
};

const clickIncrement = () => {
    total += 1;
    autoSave();
};

const cursorIncrement = () => {
    incrementValue += 1;
    // console.log(cursor);
    console.log(incrementValue);
};

document
    .getElementById('click-increase')
    .addEventListener('click', clickIncrement);
document
    .getElementById('cursor-increase')
    .addEventListener('click', cursorIncrement);
