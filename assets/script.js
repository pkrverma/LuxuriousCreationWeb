//login-registration window

const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
})

const menuBtn = document.querySelector('#hamburgerMenu');
const navigation = document.querySelector('.navList')

menuBtn.addEventListener('click', () => {
  navigation.classList.add('sidebar');
  console.log("Button click!")
});

