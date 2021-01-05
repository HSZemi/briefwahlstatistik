const toIntOrZero = (value) => {
    const intValue = parseInt(value);
    if (isNaN(intValue)) {
        return 0;
    } else {
        return intValue;
    }
}
const values = Array.from(document.querySelectorAll('.number')).map(node => node.innerText);
const numericValues = values.map(value => toIntOrZero(value));
const maxValue = numericValues.reduce((previous, current) => previous > current ? previous : current, 0);
const votersCount = numericValues.reduce((previous, current) => previous + current, 0);
document.getElementById('sum').innerText = votersCount.toString() + ' 🎉';
document.getElementById('turnout').innerHTML = (votersCount / 37_846 * 100).toFixed(2).replace('.', ',') + '&nbsp;% 😮';

document.querySelectorAll('.number').forEach(node => {
    const value = toIntOrZero(node.innerText);
    const td = document.createElement('td');
    td.classList.add('bar');
    const width = (value / maxValue * 100).toFixed(2);
    td.innerHTML = `<div class='colourbar' style='width:${width}%;'></div>`;
    node.insertAdjacentElement('afterend', td);
});