// Navbar button
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "0";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function showHideNav() {
  const menuBtn = document.getElementById('myNavBar');

  if (window.innerWidth <= 720) {
    menuBtn.innerHTML = `<div class="navbarL">
        <a href="index.html" aria-current="page">
          <img src="images/Logo.jpg" alt="Logo" />
          <h1 class="brandName">Luxurious Creation</h1>
        </a>
      </div>
      <div class="navbarRnav-tab sidebar" id="mySidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"> &times;</a>
        <ul class="navList">
          <li class="active"><a href="index.html">Home</a></li>
          <li><a href="category.html">Category</a></li>
          <li>
            <a href="feedback/index.html">Feedback</a>
          </li>
          <li>
            <a href="contact/index.html">Contact Us</a>
          </li>
          <button>
            <a href="authentication/index.html">Login/Register</a>
          </button>
        </ul>
      </div>
      <div id="main">
        <button class="openbtn" onclick="openNav()">
            <i class="fa-solid fa-bars"></i>
        </button>
      </div>`;
  } else {
    menuBtn.innerHTML = `<div class="navbarL">
        <a href="index.html" aria-current="page">
          <img src="images/Logo.jpg" alt="Logo" />
          <h1 class="brandName">Luxurious Creation</h1>
        </a>
      </div>
      <div class="navbarRnav-tab sidebar" id="mySidebar">
        <ul class="navList">
          <li class="active"><a href="index.html">Home</a></li>
          <li><a href="category.html">Category</a></li>
          <li>
            <a href="feedback/index.html">Feedback</a>
          </li>
          <li>
            <a href="contact/index.html">Contact Us</a>
          </li>
          <button>
            <a href="authentication/index.html">Login/Register</a>
          </button>
        </ul>
      </div>`;
  }
}

window.onload = showHideNav;
window.onresize = showHideNav;

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