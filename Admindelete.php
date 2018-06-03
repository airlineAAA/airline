<?php
$flightno = $_GET['flightno'];

include_once 'dbconnect.php';

$sql = "DELETE FROM flight WHERE number = '$flightno'";
if(! mysqli_query($conn, $sql))
{
	
	echo "Ошибка: ".mysqli_error($conn)."\n";
}
else
{
	echo "Удалено!";	
}

mysqli_close($conn);

?>