<?php
header('Access-Control-Allow-Origin: *'); //before release check asterisk
header("Content-Type: text/html; charset=utf-8");

function ConnToDataBase(){
$num=$_POST['num'];

	
$link = mysqli_connect("localhost", "root", "","classrooms");


if ($link == false){
    print("ERROR: Impossible connect to MySQL " . mysqli_connect_error());
}


$sql = "SELECT floor,x,y,z FROM classrooms WHERE number='$num' ";
$result_set=mysqli_query($link, $sql);



 while($row=mysqli_fetch_array($result_set)){
	 
	echo $row['floor']," ",$row['x']," ",$row['y']," ",$row['z']," ";
	
    

}
	$link->close();

}

 ConnToDataBase();
   





?>