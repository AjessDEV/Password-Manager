//DARKMODE
const darkmodeBtn = document.querySelector('.darkmode')

darkmodeBtn.addEventListener('click', () => {
    darkmodeBtn.classList.toggle('darkmode-on')
})

const body = document.querySelector('.body')
const addpass = document.querySelector('.add-pass')
const passInput = document.querySelector('.pass-input')
const platInput = document.querySelector('.plat-input')
const guide = document.querySelector('.guide')

darkmodeBtn.addEventListener('click', () => {
    body.classList.toggle('body-darkmode')
    addpass.classList.toggle('add-pass-darkmode')
    passInput.classList.toggle('pass-input-darkmode')
    platInput.classList.toggle('plat-input-darkmode')
    guide.classList.toggle('guide-darkmode')
})

//ADD PASSWORDS

document.getElementById('addPassForm').addEventListener('submit', savePass)

function savePass(e) {
    
    let Plat = document.getElementById('platform').value
    let Pass = document.getElementById('password').value

    let passWord = {
        Plat,
        Pass
    }

    if(localStorage.getItem('passwords') == null) {

        let passwords = []
        passwords.push(passWord)
        localStorage.setItem('passwords', JSON.stringify(passwords))
    } else {
        let passwords = JSON.parse(localStorage.getItem('passwords'))
        passwords.push(passWord)
        localStorage.setItem('passwords', JSON.stringify(passwords))
    }

    getPass()
    document.getElementById('addPassForm').reset()
    e.preventDefault();
}

function getPass() {
    let passwords = JSON.parse(localStorage.getItem('passwords'))
    let passwordsView = document.getElementById('Passwords')

    passwordsView.innerHTML = ''

    for(let i = 0; i < passwords.length; i++) {
        let Plat = passwords[i].Plat
        let Pass = passwords[i].Pass
        passwordsView.innerHTML += `<div class="password">
            <h3>${Plat}</h3>
            <h3>${Pass}</h3>
            <button class="delete-password-button" onclick="deletePass('${Plat}')">Eliminar</button>
        </div>`
    }
}

function deletePass(Plat) {
    let passwords = JSON.parse(localStorage.getItem('passwords'))

    for(let i = 0; i < passwords.length; i++) {
        if(passwords[i].Plat === Plat) {
            passwords.splice(i, 1)
        }
    }
    localStorage.setItem('passwords', JSON.stringify(passwords))
    getPass()
}

getPass()