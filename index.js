const valueInputNode = document.querySelector('.js-value-input');
const currencyNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output');

valueInputNode.addEventListener('input', () => {
    const rub = Number(valueInputNode.value);
    const currency = currencyNode.value;
    const result = convert(rub, currency);

    outputNode.innerText = result;
});

currencyNode.addEventListener('change', () => {
    const rub = Number(valueInputNode.value);
    const currency = currencyNode.value;
    const result = convert(rub, currency);

    outputNode.innerText = result;
});