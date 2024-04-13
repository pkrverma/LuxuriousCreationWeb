//======login-registration window======

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

// ======DropDown Function======
function dropDownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-contentA");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//======logout user from logged in page======
function logoutUser() {
  window.location.replace("../index.html");
}

// ======redirect to login page======
function loginPage() {
  window.location.replace("authentication/index.html");
}


// !!======contact Anonymous======!!

// ======verify E-Mail======
var otpVal;
function sendMail() {
  const email = document.querySelector('input[type="email"]');
  const otpbutton = document.querySelector('#otpbtn');

  // generate OTP
  const otpLength = 6;
  const randomNumber = Math.floor(Math.random() * 1000000);
  const randomString = randomNumber.toString();
  const paddedString = randomString.padStart(otpLength, '0');
  otpVal = paddedString.substring(0, otpLength);
  console.log("sendMail(): " + otpVal);
  console.log(email.value);

  let emailBody = `
    <h3>Luxurious Creation: Visualise Around Yourself With AR</h3>
    <h5>Make Your Living Comfortable</h5>
    <br>
    <p>Your OTP for email verifiation is: <strong>${otpVal}</strong>.</p>
    <p>Thank You</p>`;

  Email.send({
    SecureToken: "314209bb-7b82-4dd5-919d-7d9286a7d706",
    To: email.value,
    From: "luxuriouscreation02@gmail.com",
    Subject: "Email Verification OTP from Luxurious Creation",
    Body: emailBody,
  }).then(
    message => {
      if (message === "OK") {
        document.getElementById('otpdiv').style.display = "block";
        document.getElementById('verifydiv').style.display = "block";
        setTimeout(() => {
          alert("OTP sent to " + email.value)
          otpbutton.innerText = "Resend OTP"
        }, 2000);
      } else {
        alert("Error Occured!")
      }
    }
  );
}


// ======Verify OTP======
function verifyMail() {
  // let box = document.getElementById('messagebox');
  const otpInp = document.querySelector('[name="otp"]').value;
  console.log("verifyMail():" + otpVal);
  if (otpInp === otpVal) {
    alert("Email Address Verified Successfully.")
    // box.removeAttribute('disabled');
  }

  else {
    alert("Invalid OTP! Try Again");
  }
}


// ======category Tabs======

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " activeTab";
}

// ======customize button======
function getCustomise() {
  window.location.href = "contact/index.html";
}

// Add cart functionality

function addToCart(itemId) {

  let listCart = document.querySelector('.listCart');

  const cartItemDiv = document.createElement("div");
  cartItemDiv.classList.add("cartItem");

  const cartImgDiv = document.createElement("div");
  cartImgDiv.classList.add("cartImg");

  const cartNameDiv = document.createElement("div");
  cartNameDiv.classList.add("cartName");

  const carttotalPriceDiv = document.createElement("div");
  carttotalPriceDiv.classList.add("carttotalPrice");

  const productImgTag = document.createElement("img");
  productImgTag.classList.add("productImg");


  const cartQuantityDiv = document.createElement("div");
  cartQuantityDiv.classList.add("cartQuantity");

  const minusTag = document.createElement("span");
  minusTag.classList.add("minus");
  minusTag.innerText += "-";

  const valueTag = document.createElement("span");
  valueTag.classList.add("value");
  valueTag.innerText += "1";

  const plusTag = document.createElement("span");
  plusTag.classList.add("plus");
  plusTag.innerText += "+";

  listCart.appendChild(cartItemDiv);
  cartItemDiv.appendChild(cartImgDiv);
  cartImgDiv.appendChild(productImgTag);
  cartItemDiv.appendChild(cartNameDiv);
  cartItemDiv.appendChild(carttotalPriceDiv);
  cartItemDiv.appendChild(cartQuantityDiv);
  cartQuantityDiv.appendChild(minusTag);
  cartQuantityDiv.appendChild(valueTag);
  cartQuantityDiv.appendChild(plusTag);


  var item = document.getElementById(itemId);

  if (item) {
    var imgSrc = item.querySelector(".imgBtn img").getAttribute("src");
    productImgTag.src = imgSrc;

    var catName = item.querySelector(".imgBtn .catCardinner .catDetail .catName").textContent;
    cartNameDiv.innerText += catName;

    var priceValue = item.querySelector(".imgBtn .pricing").innerText;
    carttotalPriceDiv.innerText += priceValue;

  } else {
    alert("Item is not added to cart due to some internal error!")
    console.log("Item with id: " + itemId + " not found.");
  }
}

//=========================================
//-----------------------------------------
//=========================================