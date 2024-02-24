<!--Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/-->
<!DOCTYPE html>
<html>
  <head>
    <title>Luxurious Creation | Feedback</title>

    <link rel="icon" href="../images/Logo.jpg" />
    <!-- custom-theme -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      name="keywords"
      content="Elegant Feedback Form  Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design"
    />
    <script type="application/x-javascript">
      addEventListener("load", function() {
        setTimeout(hideURLbar, 0);
      }, false);

      function hideURLbar() {
        window.scrollTo(0, 1);
      }
    </script>
    <!-- <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    /> -->
    <!-- //custom-theme -->
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link
      href="../assets/style.css"
      rel="stylesheet"
      type="text/css"
      media="all"
    />
    <!-- <link href="//fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"> -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Alegreya&family=Allura&family=Libre+Baskerville&family=Rokkitt:wght@300;400&family=Taviraj&family=Ysabeau+Infant&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>

  <body class="agileits_w3layouts" onload="hideLoader()">
    <!-- loader -->
    <div class="page-loader">
      <div class="spinner"></div>
      <div class="txt">Loading...</div>
    </div>

    <!-- loader end -->
    <!--Navigation-->
    <nav>
      <div class="navdiv">
        <div class="navbarL">
          <a href="../index.html">
            <img src="../images/Logo.jpg" alt="Logo" />
            <h1 class="brandName">Luxurious Creation</h1>
          </a>
        </div>
        <div class="navbarR">
          <ul class="navList">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../category.html">Category</a></li>
            <li class="active">
              <a href="index.html">Feedback</a>
            </li>
            <li>
              <a href="../contact/index.html">Contact Us</a>
            </li>
            <button>
              <a href="../authentication/index.html">Login/Register</a>
            </button>
          </ul>
        </div>
      </div>
    </nav>

    <section id="feed">
      <h1 class="agile_head text-center">Feedback Form</h1>
      <div class="w3layouts_main wrap">
        <h3>
          Please help us to serve you better by taking a couple of minutes.
        </h3>
        <form action="feedback.php" method="post" class="agile_form">
          <h2>Which category of product you tried from our site?</h2>
          <ul class="agile_info_select" required>
            <li>
              <input
                type="radio"
                name="category"
                value="Showpieces"
                id="Showpieces"
              />
              <label for="Showpieces">Showpieces</label>
              <div class="check w3"></div>
            </li>
            <li>
              <input
                type="radio"
                name="category"
                value="Tables/Chairs"
                id="Tables/Chairs"
              />
              <label for="Tables/Chairs">Tables/Chairs</label>
              <div class="check w3ls"></div>
            </li>
            <li>
              <input type="radio" name="category" value="Beds" id="Beds" />
              <label for="Beds">Beds</label>
              <div class="check wthree"></div>
            </li>
            <li>
              <input type="radio" name="category" value="Others" id="Others" />
              <label for="Others">Others</label>
              <div class="check w3_agileits"></div>
            </li>
          </ul>

          <ul class="agile_info_select rateUs" required>
            <h2>Rate our Product:</h2>
            <div class="rating">
              <li>
                <input type="radio" name="rating" value="One" id="rating1" />
                <label class="rate" for="rating1"
                  >1<i class="fa-solid fa-star"></i
                ></label>
                <div class="Rcheck w3"></div>
              </li>
              <li>
                <input type="radio" name="rating" value="Two" id="rating2" />
                <label class="rate" for="rating2"
                  >2<i class="fa-solid fa-star"></i
                ></label>
                <div class="Rcheck w3"></div>
              </li>
              <li>
                <input type="radio" name="rating" value="Three" id="rating3" />
                <label class="rate" for="rating3"
                  >3<i class="fa-solid fa-star"></i
                ></label>
                <div class="Rcheck w3"></div>
              </li>
              <li>
                <input type="radio" name="rating" value="Four" id="rating4" />
                <label class="rate" for="rating4"
                  >4<i class="fa-solid fa-star"></i
                ></label>
                <div class="Rcheck w3"></div>
              </li>
              <li>
                <input type="radio" name="rating" value="Five" id="rating5" />
                <label class="rate" for="rating5"
                  >5<i class="fa-solid fa-star"></i
                ></label>
                <div class="Rcheck w3"></div>
              </li>
            </div>
          </ul>

          <h2>
            How do you feel after using product? Would you recommend to others,
            please write to us...
          </h2>
          <textarea
            placeholder="Additional Feedback"
            class="w3l_summary"
            name="comments"
            required=""
          ></textarea>
          <input
            type="text"
            placeholder="Your Name"
            required
            name="name"
          /><br />
          <input
            type="email"
            placeholder="Your Email"
            required
            name="email"
          /><br />
          <input
            type="text"
            placeholder="Your Number"
            required
            name="num"
          /><br />
          <center>
            <input type="submit" value="submit Feedback" class="agileinfo" />
          </center>
        </form>
      </div>
      <div class="agileits_copyright text-center">
        <p></p>
      </div>
    </section>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="../assets/script.js"></script>
  </body>
</html>
