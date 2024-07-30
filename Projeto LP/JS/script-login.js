const loginForm = document.getElementById('login-form')

function login() {

    const usuario = document.getElementById('usuario').value
    const senha = document.getElementById('password').value

    if(usuario === 'adm' && senha === 'adm')
        window.location.href="http://127.0.0.1:5500/adm-msg.html"

    else 
        alert('Usuario ou senha invalido')
    

}
