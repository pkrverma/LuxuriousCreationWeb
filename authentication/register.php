<?php 
ob_start(); 
require 'config.php';

$name = $_POST['name'];
$email = $_POST['email'];
$username = $_POST['username'];
$contact = $_POST['contact'];
$password = $_POST['password'];

$result1 = mysqli_query($con, "INSERT INTO `register_lc` (`name`, `username`, `email`, `contact`, `password`) VALUES ('".$name."','".$username."','".$email."','".$contact."','".$password."')");
$result2 = mysqli_query($con, "INSERT INTO `login_lc` (`username`, `password`) VALUES ('".$username."','".$password."')");

// $query = mysqli_query($con, "INSERT INTO `login_lc`(`name`, `email`, `subject`, `message`) VALUES ('$name','$email','$subject','$message')");
echo '<script>alert("Registration Successfull! Redirecting to Login page"); location.replace(document.referrer);</script>';
?>