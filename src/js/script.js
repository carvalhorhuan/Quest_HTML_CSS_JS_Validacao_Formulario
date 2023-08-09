document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const observacoesInput = document.getElementById('observacoes');
    const submitButton = document.getElementById('submit');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (nameInput.value.trim() === '') {
            nameInput.parentElement.classList.add('error');
            nameInput.nextElementSibling.style.visibility = 'visible';
        } else {
            nameInput.parentElement.classList.remove('error');
            nameInput.parentElement.classList.add('correct');
            nameInput.nextElementSibling.style.visibility = 'hidden';
        }

        if (emailInput.value.trim() === '') {
            emailInput.parentElement.classList.add('error');
            emailInput.nextElementSibling.style.visibility = 'visible';
        } else {
            emailInput.parentElement.classList.remove('error');
            emailInput.parentElement.classList.add('correct');
            emailInput.nextElementSibling.style.visibility = 'hidden';
        }

        if (phoneInput.value.trim() === '') {
            phoneInput.parentElement.classList.add('error');
            phoneInput.nextElementSibling.style.visibility = 'visible';
        } else {
            phoneInput.parentElement.classList.remove('error');
            phoneInput.parentElement.classList.add('correct');
            phoneInput.nextElementSibling.style.visibility = 'hidden';
        }

        if (observacoesInput.value.trim() === '') {
            observacoesInput.parentElement.classList.add('error');
            observacoesInput.nextElementSibling.style.visibility = 'visible';
        } else {
            observacoesInput.parentElement.classList.remove('error');
            observacoesInput.parentElement.classList.add('correct');
            observacoesInput.nextElementSibling.style.visibility = 'hidden';
        }

        //const inputGroups = form.querySelectorAll('.input-group');
        //const hasError = Array.from(inputGroups).some(group => group.classList.contains('error'));

        //if (!hasError) {
        //    alert('Mensagem enviada com sucesso!');
        //}
    });
});