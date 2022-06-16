let emailDigitado = document.querySelector('.input')
let paragraphErro = document.querySelector('#erro')
let iconErro = document.querySelector('.erro')
let button = document.querySelector('#button')
let form = document.querySelector('.email')


function verifica() {
    if(emailDigitado.value.length == 0) {
        alert("Please type your e-mail") 
    }
}

function checarEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf('@'))
    dominio = field.value.substring(field.value.indexOf('@') + 1, field.value.length)

    if ((usuario.length >= 1) &&
    (dominio.length >= 3) &&
    (usuario.search("@")== -1) &&
    (dominio.search("@")== -1) &&
    (usuario.search(" ")== -1) &&
    (dominio.search(" ")== -1) &&
    (dominio.search(".")!= -1) &&
    (dominio.indexOf(".") >= 1) &&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
        let arrayOfEmails = []
        arrayOfEmails.push(emailDigitado)

        console.log(arrayOfEmails)
        document.location.reload(true);
    } else {
        form.addEventListener('submit', e => {
            e.preventDefault()
            iconErro.classList.add('icon-erro')
            emailDigitado.classList.add('border-erro')
            paragraphErro.innerHTML = 'Please provide a valid e-mail'
        })
    }
}