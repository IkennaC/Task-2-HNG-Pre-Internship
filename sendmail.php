<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["title"];
    $message = $_POST["message"];
    $formcontent=" From: $name \n Message: $message";
    $recipient = "iykeoyiih@outlook.com";
    $mailheader = "From: $email \r\n";

    $file = fopen("Message.txt", "a")
    fwrite($file, $formcontent);
    fclose($file);

    echo "<script type='text/Javascript'>alert('Thank you for contacting me! I'll get back to you soon')</script>";
    echo "<script type='text/Javascript'>document.location='index.html'</script>";

?>