<?php
//$admin_email = "...";

$userEmail= $_POST['userEmail'];
$emne = $_POST['emne'];
$indhold = $_POST['indhold'];

// Trying to send email with subject $emne and content $indhold to $email. M

//send email
$diditsend = mail($userEmail, $emne, $indhold, "From:" . "kimarokko@hotmail.com");
//let_export($diditsend, true);

//send back status
if ($diditsend){
    echo ("Mail succesfully sent!");
    } 
    else {
        echo ("Mail not sent :(");
    }
?>