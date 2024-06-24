class Contato {

    constructor(name, email, message){

        this.name = name
        this.email = email
        this.message = message

    }

    validateData() {
        
        for (let i in this) {

            if(this[i] === undefined || this[i] === "")
                return false
            
        }

        return true
    }

}

class Database {

    constructor() {

        const id = localStorage.getItem('id')

        if(id === null)
            localStorage.setItem('id', 0)
        
    }

    createContato(contato) {

        const id = getNextId()
        localStorage.setItem(id, JSON.stringify(contato))
        localStorage.setItem('id', id)

    }

}

const database = new Database()

function getNextId() {

    const nextId = localStorage.getItem('id')
    return parseInt(nextId) + 1;

}

function registerContato() {

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    const contato = new Contato(name, email, message)

    if(contato.validateData()) {

        database.createContato(contato)
        alert("Mensagem enviada com sucesso")

    }
    
}