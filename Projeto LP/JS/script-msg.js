const msgList = document.getElementById('msg-list')

const saveMsgs = (nome, email, msgt, done = 0, save = 1) => {

    const msg = document.createElement("div");
    msg.classList.add("msg");

    const msgNome = document.createElement("p");
    msgNome.innerText = nome;
    msg.appendChild(msgNome);

    const msgEmail = document.createElement("p");
    msgEmail.innerText = email;
    msg.appendChild(msgEmail);

    const msgMsg = document.createElement("textarea");
    msgMsg.innerText = msgt;
    msg.appendChild(msgMsg);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-msg");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    msg.appendChild(deleteBtn);

    // utilizando dados da localstorage

    if(done) {
        msg.classList.add("done");
    }

    if(save) {
        saveMsg({text, done})
    }

    msgList.appendChild(msg);
}

const getTodasMsg = () => {

    const msgs = JSON.parse(localStorage.getItem('msgs')) || [];
    
    return msgs
}

const saveMsg = (msg) => {

    const msgs = getTodasMsg()

    msgs.push(msg)

    localStorage.setItem('msgs',JSON.stringify(msgs))

}

const loadMsgs = () => {
    const msgs = getTodasMsg();

    msgs.forEach((msg) => {
        saveMsgs(msg.nome,msg.email,msg.msg,msg.done,0);
    })
}

document.addEventListener("click", (e) => {

    const targtEl = e.target;
    const parentEl = targtEl.closest("div");
    let nome;

    if(parentEl && parentEl.querySelector("p")) {
        nome = parentEl.querySelector("p").innerHTML;
    }

    console.log(parentEl)

    if(parentEl.classList.contains("msg")) {
        parentEl.remove();
        removeMsgLocalStorage(nome);
    }

})

const removeMsgLocalStorage = (nome) => {

    const msgs = getTodasMsg();

    const filteredMsgs = msgs.filter((msg) => msg.nome !== nome)

    localStorage.setItem("msgs",JSON.stringify(filteredMsgs));
}


loadMsgs()