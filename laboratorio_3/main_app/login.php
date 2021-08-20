<?php
require 'conexion.php';
sleep(3);
$usuarios =$mysqli->query("SELECT nombre, rol
FROM usuarios
WHERE Usuario = '".$_POST['usuariolg']."'
AND Password = '".$_POST['contralg']."'");

if($usuarios->num_rows == 1):
    $datos = $usuarios->fetch_assoc();
    echo json_encode(array('error' => false, 'tipo' => $datos['rol']));
else:
    echo json_encode(array('error' => true));

endif;

$mysqli->close();

?>