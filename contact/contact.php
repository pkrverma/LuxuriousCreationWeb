<?php 
ob_start(); 
require 'config.php';

$name = $_POST['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$message = $_POST['message'];

$query = mysqli_query($con, "INSERT INTO `contact_lc`(`name`, `email`, `subject`, `message`) VALUES ('".$name."','".$email."','".$subject."','".$message."')");
echo '<script>alert("Thank You..! Your Feedback is Valuable to Us"); location.replace(document.referrer);</script>';
?>