const button = document.querySelector('#enviar');

const addLoading = () => {
    button.innerHTML = '<img src="./loading.png" class="loading">';
};

const removeLoading = () => {
    button.innerHTML = 'Enviar';
};

const form = document.querySelector('#link');
const novoLinkDeAcao = document.querySelector('#linkloja')

novoLinkDeAcao.addEventListener('change', () => {
    form.action = novoLinkDeAcao.value
})



const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();

    const name = document.querySelector('input[name=name]').value;
    const loja = document.querySelector('input[name=loja]').value;

    console.log('Name:', name);
    console.log('Loja:', loja);

    fetch('https://api.sheetmonkey.io/form/hTQkaVDukjMPXPf95zCZU', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, loja })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Form submission successful:', data);
    })
    .catch(error => {
        console.error('Error submitting form:', error);
    })
    .finally(() => {
        removeLoading();
    });
};

document.querySelector('form').addEventListener('submit', handleSubmit);
