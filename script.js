const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const login = document.getElementById('login');

registerBtn.addEventListener('click', ()=>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
});