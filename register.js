const loginOfRegisterNode = document.querySelector('.login-of-register');
loginOfRegisterNode.addEventListener('click', ()=> {
    window.location = `login.html`;
})

// let Objectregister = {
//     Firstname: '',
//     Lastname: '',
//     Email: '',
//     Password: ''
// }

function Objectregister(firstname,lastname,email,password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
}

let account = JSON.parse(localStorage.getItem('account'));
if(account === null) account = [];
function checkform(item) {
    let temp = false;
    if (item.firstname !== '' && item.lastname !== '' && item.email !== '' && item.password !== '') {
        temp = true;
    } else {
        alert('Please check again because the input is empty!')
    }
    return temp;
}

const buttonNode = document.querySelector('.button');
buttonNode.addEventListener('click', ()=> {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const product = new Objectregister(firstname,lastname,email,password)
    if(checkform(product) === true) {
        account.push(product);
        localStorage.setItem('account',JSON.stringify(account));
        alert('Account successfully created');
        window.location = `login.html`;
    };
})