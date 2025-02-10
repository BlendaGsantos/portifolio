
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');  
    form.addEventListener('submit', (event) => {
        event.preventDefault();  

        const name = document.querySelector('input[name=name]').value;
        const email = document.querySelector('input[name=email]').value;
        const celular = document.querySelector('input[name=celular]').value;
        const texto = document.querySelector('textarea[name=texto]').value;

        fetch('https://api.sheetmonkey.io/form/w81fLVZSMDRe28ij3usHjw', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, celular, texto })
        })
        .then(response => {
            if (response.ok) {
                alert('Formulário enviado com sucesso!');
                form.reset();
            } else {
                alert('Houve um erro ao enviar o formulário.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro na conexão. Tente novamente.');
        });
    });
});