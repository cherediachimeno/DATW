<?php

    if(isset($_REQUEST['enviar'])){

    $noches = $_REQUEST['numNoches'];
    $ciudad = $_REQUEST['ciudad'];

    $costeHotel = costeHotel($noches);
    $costeViaje = coste_avion($ciudad);
    }

    function costeHotel($n){
        if ($n > 7) {
            $coste = $n * 120;
        } else {
             $coste = $n * 140;
        }
        return $coste;
    }

    function coste_avion($c){
        $coste_viaje = 0;

        switch($c){
            case "Paris": $coste_viaje = 300;
            break;
            case "Berlin": $coste_viaje = 350;
            break;
            case "Osaka": $coste_viaje = 850;
            break;
            case "NY": $coste_viaje = 700;
            break;
        }

        return $coste_viaje;
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>El número de noches es de <?= $noches ?></p>
    <p>PRECIO TOTAL DEL HOTEL ES DE: <?= $costeHotel ?></p>
    <p>El precio del avión es de : <?= $costeViaje ?></p>
    <p><b>TOTAL:</b> <?= $costeHotel+$costeViaje ?></p>
</body>
</html>