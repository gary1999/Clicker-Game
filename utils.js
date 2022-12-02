let incrementIncreaseTimer = setInterval(increment, 1000);

const autoSave = () => {
    localStorage.setItem('storageTotal', total);
    document.getElementById('total').innerHTML = total;
};

document
    .getElementById('stopIncrementButton')
    .addEventListener('click', stopIncrement);
