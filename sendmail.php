<?php

use PHPMailer\PHPMailer\PHPMailer;

require_once "PHPMailer/Exception.php";
require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";

$mail = new PHPMailer(true);

$alert = "";

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['mail'];
    $message = $_POST['message'];

    try{
        $mail->isSMTP();
        $mail->Host = ""; #domena ili mail.domena.com
        $mail->SMTPAuth = true;
        $mail->Username = ""; #vaš host email račun koji koristite kao SMTP server
        $mail->Password = ""; #vaš host šifra email računa
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587; #može biti i 465iti i ssl

        $mail->setFrom(""); #vaš host email račun koji koristite kao SMTP server
        $mail->addAddress(""); #email adresa gdje želite primati emailove

        $mail->isHTML(true);
        $mail->Subject = "Poruka zaprimljena (Contact Page)";
        $mail->send();
        $alert = "<div class='alert-success'>
                    <span>Poruka poslana! Hvala što ste nas kontaktirali.</span>
                  </div>";
    } catch (Exception $e) {
        $alert = '<div class="alert-error">
                    <span>".$e->getMessage()."</span>
                  </div>';
    }
}




