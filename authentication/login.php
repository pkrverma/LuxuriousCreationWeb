<?php 
ob_start(); 
require 'config.php';

$username = $_POST['username'];
$password = $_POST['password'];

$result = mysqli_query($con, "SELECT * FROM `login_lc` WHERE `username` = '".$username."' and `password` = '".$password."'");
$flag = false;

while($rows=$result->fetch_assoc()){
    $flag = true;
}

if($flag){
    // echo "<h1>Welcome: ".$Username."<h1>";
    echo '<script>alert("Login Successful!"); location.replace(document.referrer);</script>';
}else{
    // echo "Invalid Username or Password!";
    echo '<script>alert("Invalid Username or Password!"); location.replace(document.referrer);</script>';
}
$conn->close();
?>