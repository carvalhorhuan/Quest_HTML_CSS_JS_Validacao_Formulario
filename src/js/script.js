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
        } else {
            nameInput.parentElement.classList.remove('error');
            nameInput.parentElement.classList.add('correct');
        }

        if (emailInput.value.trim() === '') {
            emailInput.parentElement.classList.add('error');
        } else {
            emailInput.parentElement.classList.remove('error');
            emailInput.parentElement.classList.add('correct');
        }

        if (phoneInput.value.trim() === '') {
            phoneInput.parentElement.classList.add('error');
        } else {
            phoneInput.parentElement.classList.remove('error');
            phoneInput.parentElement.classList.add('correct');
        }

        if (observacoesInput.value.trim() === '') {
            observacoesInput.parentElement.classList.add('error');
        } else {
            observacoesInput.parentElement.classList.remove('error');
            observacoesInput.parentElement.classList.add('correct');
        }

        const inputGroups = form.querySelectorAll('.input-group');
        const hasError = Array.from(inputGroups).some(group => group.classList.contains('error'));

        if (!hasError) {
            alert('Mensagem enviada com sucesso!');
        }
    });
});