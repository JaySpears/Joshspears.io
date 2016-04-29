<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['email-content'];

    var_dump('$name')
    mail("joshuaspears29@gmail.com", "Website Message!", $message);
}
?>
