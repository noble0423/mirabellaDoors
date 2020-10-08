<?php

// Email Contact Form to:
$to = "ryan.noble82@gmail.com";

// userFullName
// userEmail
// userEmailSubject
// userHowDidHear
// userEmailMessage

if (isset($_POST["userFullName"]) && isset($_POST["userEmail"]) && isset($_POST["userEmailSubject"]) && isset($_POST["userHowDidHear"]) && isset($_POST["userEmailMessage"])) {
    $name       = $_POST["userFullName"];

    $from       = $_POST["userEmail"];

    $howDidHear = $_POST["userHowDidHear"];

    $message    = "
                <html>
                <head>
                <title>HTML EMAIL</title>
                </head>
                <body>
                <h4>The following message was sent from the Contact Form on the Mirabela Doors website:</h4>
                <br>
                <p>How did customer hear about Mirabela Doors? {$howDidHear}</p>
                <p>
                ";
    $message   .= $_POST["userEmailMessage"];
    $message   .= "
                </p>
                <br>
                <p><u>Customer Name: </u> {$name}<br>
                *** Hitting <i>'reply'</i> will send a reply email to the following address: {$from}</p>
                </body>
                </html>
                ";

    $subject    = "Website Inquiry - '";
    $subject   .= $_POST["userEmailSubject"];
    $subject   .= "'";

    $headers 	= "MIME-Version: 1.0" . "\r\n";
    $headers   .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers   .= "From: {$name} <webmaster@example.com>" . "\r\n";
    $headers   .= "Reply-To: {$from}" . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        $result = array(
            "message" => "Thanks for contacting us! We will reach out to you shortly!",
            "sendstatus" => 1
        );

        header('HTTP/1.1 200 OK');
        
        echo json_encode($result);
    }

    else {
        $result = array(
            "message" => "Oops, something went wrong. Please call us at (713) 252-6508.",
            "sendstatus" => 1
        );

        echo json_encode($result);
    }
}


?>