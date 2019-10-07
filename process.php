<?php

    $to = "avesousapersonal@gmail.com";
    $from = $_REQUEST['name'];
    $subject = "Contacto de web [JALUX]"
    $name = $_REQUEST['name'];
    $headers = "From: $from";

    $fields = array();
    $fields{"name"} = "name";
    $fields{"email"} = "email";
    $fields{"subject"} = "subject";
    $fields{"message"} = "message";

    $body = "¡Haz recibido un correo electrónico! por medio de Jalux.com.ar, los datos obtenidos son: \n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>
