const checkboxForm = document.getElementById('form');
const shuffleBtn = document.getElementById('shuffle-btn');
const changeBtn = document.getElementById('change-btn');
const showBtn = document.getElementById('show-btn');
const outputDiv = document.getElementById('output');

const checkboxes = Array.from(checkboxForm.querySelectorAll('input[type="checkbox"]'));

shuffleBtn.addEventListener('click', () => {
    const inputs = Array.from(checkboxForm.querySelectorAll('#form >label'));
    const contentArray = inputs.map(element => element.innerHTML);

    inputs.forEach(element => {
        const index = Math.floor(Math.random() * contentArray.length)
        element.innerHTML = contentArray.splice(index, 1)

    });

});


const newValues = ['New Value of Internship', 'New Value of Pabau', 'New Value of Employment', 'New Value of Career'];

changeBtn.addEventListener('click', () => {
    checkboxes.forEach((checkbox, index) => {
        checkbox.value = newValues[index];
        checkbox.nextSibling.textContent = newValues[index];
    });
});


showBtn.addEventListener('click', () => {
    const selectedValues = checkboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    outputDiv.textContent = `Selected checkbox: ${selectedValues.join(', ')}`;

});
