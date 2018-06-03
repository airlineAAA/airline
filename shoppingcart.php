<?php
// Start the session
session_start();

include_once 'dbconnect2.php';

$type = $_POST["type"];
date_default_timezone_set("Europe/Moscow");
$t=time();
$time = date("Y-m-d h:i:s");


if(!isset($_SESSION['user'])){
    header("Location: customersignin.html");
}else{
    $user = $_SESSION['user'];


	if($type =="all" || $type =="onewaynonstop" ){

	$flightno = $_POST["flightno"];
	$class = $_POST["classtype"];
	$price = $_POST["price"];
	$date = $_POST["date"];

	$sql = "INSERT INTO book (time, date, flightno, username, classtype, paid) 
			VALUES ('$time', '$date', '$flightno', '$user', '$class', '0')";;


	$result = mysqli_query($con,$sql);
    header("Location: cartshow.php");
	}

    echo "Ошибка при бронировании..";










}

mysqli_close($con);


?>



