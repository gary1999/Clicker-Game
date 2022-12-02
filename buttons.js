const loadGame = () => {
    if (localStorage.getItem('storageTotal')) {
        total = parseInt(localStorage.getItem('storageTotal'));
    } else {
        total = 0;
    }
};

const saveGame = () => {
    localStorage.setItem('storageTotal', total);
    document.getElementById('total').innerHTML = total;
};

const resetGame = () => {
    total = 0;
    localStorage.setItem('storageTotal', total);
    document.getElementById('total').innerHTML = total;
};

// document.getElementById('saveButton').addEventListener('click', saveGame);
// document.getElementById('loadButton').addEventListener('click', loadGame);
document.getElementById('resetButton').addEventListener('click', resetGame);
