<!--Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/-->
<!DOCTYPE html>
<html>

<head>
  <title>Luxurious Creation | Feedback</title>
  <link rel="icon" href="../images/Logo.jpg">
  <!-- custom-theme -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="keywords"
    content="Elegant Feedback Form  Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
  <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
    function hideURLbar(){ window.scrollTo(0,1); } </script>
  <!-- //custom-theme -->
  <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
  <!-- <link href="//fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"> -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alegreya&family=Allura&family=Libre+Baskerville&family=Rokkitt:wght@300;400&family=Taviraj&family=Ysabeau+Infant&display=swap" rel="stylesheet">
</head>

<body class="agileits_w3layouts">

  <!--Navigation-->
  <nav>
    <div class="navdiv">
      <div class="navbarL">
        <img src="../images/Logo.jpg" alt="Logo" />
        <h1 class="brandName">Luxurios Creation</h1>
      </div>
      <div class="navbarR">
        <ul class="navList">
          <li><a href="../index.html">Home</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="http://localhost/Home%20Decor-xampp/feedback/">Feedback</a></li>
          <li><a href="#">Contact Us</a></li>
          <button>Login/Register</button>
        </ul>
      </div>
    </div>
  </nav>


  <section id="feed">
    <h1 class="agile_head text-center">Feedback Form</h1>
    <div class="w3layouts_main wrap">
      <h3>Please help us to serve you better by taking a couple of minutes. </h3>
      <form action="feedback.php" method="post" class="agile_form">
        <h2>Which category of product you tried from our site?</h2>
        <ul class="agile_info_select" required>
          <li><input type="radio" name="category" value="Showpieces" id="Showpieces" required>
            <label for="Showpieces">Showpieces</label>
            <div class="check w3"></div>
          </li>
          <li><input type="radio" name="category" value="Tables/Chairs" id="Tables/Chairs">
            <label for="Tables/Chairs">Tables/Chairs</label>
            <div class="check w3ls"></div>
          </li>
          <li><input type="radio" name="category" value="Beds" id="Beds">
            <label for="Beds">Beds</label>
            <div class="check wthree"></div>
          </li>
          <li><input type="radio" name="category" value="Others" id="Others">
            <label for="Others">Others</label>
            <div class="check w3_agileits"></div>
          </li>
        </ul>
        <h2>How do you feel after using product? Would you recommend to others, please write to us...</h2>
        <textarea placeholder="Additional Feedback" class="w3l_summary" name="comments" required=""></textarea>
        <input type="text" placeholder="Your Name" required name="name" /><br>
        <input type="email" placeholder="Your Email" required name="email" /><br>
        <input type="text" placeholder="Your Number" required name="num" /><br>
        <center><input type="submit" value="submit Feedback" class="agileinfo" /></center>
      </form>
    </div>
    <div class="agileits_copyright text-center">
      <p> </p>
    </div>

  </section>







</body>

</html>