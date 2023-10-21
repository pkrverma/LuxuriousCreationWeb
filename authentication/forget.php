<?php 
ob_start(); 
require 'config.php';

$username = $_POST['username'];
$password = $_POST['newPassword'];

$result1 = mysqli_query($con, "SELECT * FROM `register_lc` WHERE `username` = '".$username."'");
$result2 = mysqli_query($con, "SELECT * FROM `login_lc` WHERE `username` = '".$username."'");
$flag = false;

while($rows=$result1->fetch_assoc()){
    $flag = true;
}


if($flag){
    $result3 = mysqli_query($con, "UPDATE `login_lc` SET `password` ='".$password."' WHERE `username` = '".$username."'");
    $result4 = mysqli_query($con, "UPDATE `register_lc` SET `password` ='".$password."' WHERE `username` = '".$username."'");
    echo '<script>alert("Password Changed Successfully!"); location.replace(document.referrer);</script>';
}else{
    echo '<script>alert("Try Again! No account found with this Username!"); location.replace(document.referrer);</script>';
}

?>