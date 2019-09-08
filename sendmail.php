<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $title = $_POST["title"];
    $message = $_POST["message"];
    $formcontent = "\n From: $name \n Email: $email \n Title: $title \n Message: $message";
    
    
    $file = fopen("Message.txt", "a");
    fwrite($file, $formcontent);
    fclose($file);

    echo "<script type='text/Javascript'>alert('Thank you for contacting me! I'll get back to you soon')</script>";
    echo "<script type='text/Javascript'>document.location='index.html'</script>";

?>