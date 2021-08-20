<?php 
$mysqli = new mysqli('localhost','root', '', 'practicasupervisada'); 
if($mysqli->connect_errno): 
echo "Error al conectarse",$mysqli->connect_error; 
endif; 

?> 