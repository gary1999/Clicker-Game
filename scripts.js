let total = 0;

const increment = () => {
    total += 1;
    document.getElementById('total').innerHTML = total;
};

document.getElementById('click-increase').addEventListener('click', increment);
