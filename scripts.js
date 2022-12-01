let total;

if (localStorage.getItem('storageTotal')) {
    total = parseInt(localStorage.getItem('storageTotal'));
} else {
    total = 0;
}

const increment = () => {
    total += 1;
    localStorage.setItem('storageTotal', total);
    document.getElementById('total').innerHTML = total;
};

document.getElementById('click-increase').addEventListener('click', increment);
document.getElementById('total').innerHTML = total;
