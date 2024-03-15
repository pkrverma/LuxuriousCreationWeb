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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//logout user from logged in page

function logoutUser() {
  window.location.replace("../index.html");
}

// redirect to login page
function loginPage() {
  window.location.replace("../authentication/index.html");
}

//welcome message after login

function welcomeMsg() {
  let msg = document.querySelector('.introModel').innerText;
  console.log(msg);
}

// includes html

const navtab = document.querySelector('.nav_file');
fetch('/navBar.html')
  .then(res => res.text())
  .then(data => {
    navtab.innerHTML = data;
  })

// function includeHeader(){
//   $("#header_file").load("../../includes/header.html");
// }