const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const forgetLink = document.querySelector('.forget-link')
const loginBack = document.querySelector('.login-back')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})

forgetLink.addEventListener('click', ()=>{
    wrapper.classList.add('activate');
})

loginBack.addEventListener('click', ()=>{
    wrapper.classList.remove('activate');
})