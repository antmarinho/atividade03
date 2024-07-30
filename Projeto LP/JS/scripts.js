const contatoForm = document.getElementById('contact-form')

const getTodasMsg = () => {

    const msgs = JSON.parse(localStorage.getItem('msgs')) || [];
    
    return msgs
}

const saveMsg = (msg) => {

    const msgs = getTodasMsg()

    msgs.push(msg)

    localStorage.setItem('msgs',JSON.stringify(msgs))

}

contatoForm.addEventListener("submit", (e) => {

    const nome = document.getElementById('name').value
    const email = document.getElementById('email').value
    const msg = document.getElementById('message').value

    if(validateEmail(email)) {

        const contato = {
            nome: nome,
            email: email,
            msg: msg
        }

        alert('Mensagem enviada')
    
        saveMsg(contato)


    } else {

        alert('Email invalido')
    }

})


//validacoes

function validateEmail(email) {

  let re = /\S+@\S+\.\S+/;

  return re.test(email);

}


// fetch

async function verificar() {

    const dominio = document.getElementById('domain').value

    const url = "http://127.0.0.1:5500/JS/listaDom.json";

    try {

            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        json.dominios.includes(dominio) ? alert('O dominio ja foi resgistrado escolha outro') : alert('O dominio estar disponivel para uso')


    } catch (error) {
        
        console.error(error.message);
    }
}