<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $exploits = "/(content-type|bcc:|cc:|document.cookie|onclick|onload|javascript|alert)/i";
    $profanity = "/(beastial|bestial|blowjob|clit|cock|cum|cunilingus|cunillingus|cunnilingus|cunt|ejaculate|fag|felatio|fellatio|fuck|fuk|fuks|gangbang|gangbanged|gangbangs|hotsex|jism|jiz|kock|kondum|kum|kunilingus|orgasim|orgasims|orgasm|orgasms|phonesex|phuk|phuq|porn|pussies|pussy|spunk|xxx)/i";
    $spamwords = "/(viagra|phentermine|tramadol|adipex|advai|alprazolam|ambien|ambian|amoxicillin|antivert|blackjack|backgammon|texas|holdem|poker|carisoprodol|ciara|ciprofloxacin|debt|dating|porn)/i";
    $bots = "/(Indy|Blaiz|Java|libwww-perl|Python|OutfoxBot|User-Agent|PycURL|AlphaServer)/i";

    if (preg_match($bots, $_SERVER['HTTP_USER_AGENT'])) {
        exit("Known spam bots are not allowed.");
    }
    foreach ($_POST as $key => $value) {
        $value = trim($value);

        if (empty($value)) {
            exit("Empty fields are not allowed. Please go back and fill in the form properly.");
        } elseif (preg_match($exploits, $value)) {
            exit("Exploits/malicious scripting attributes aren't allowed.");
        } elseif (preg_match($profanity, $value) || preg_match($spamwords, $value)) {
            exit("That kind of language is not allowed through our form.");
        }

        $_POST[$key] = stripslashes(strip_tags($value));       
    }
    
    if (!ereg("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,6})$",strtolower($_POST['email']))) {
        exit("That e-mail address is not valid, please use another.");
    }


    
    $recipient = "Contact Form melissa@rayvendesigns.com,rayvendesigns@gmail.com";
    $subject = "New Message from RayVen Designs";
    
    $message = "Received an e-mail through your contact form: \n";
    $message .= "Name: {$_POST['name']} {$_POST['last']} \n";
    $message .= "E-mail: {$_POST['email']} \n";
    $message .= "Phone: {$_POST['phone']} \n";
    $message .= "Message: {$_POST['message']} \n";
    
//    $headers = "From: Langhausen Enterprises <$recipient> \n";
//    $headers .= "Reply-To: <{$_POST['email']}>";
    $from = 'Contact Form <contact@rayvendesigns.com>'; 

 // send email
    $success = mail($recipient,$subject,$message,"From: " . $from);
    
    if ($success) {
        echo "success";
    } else {
        echo "Sorry, there was an error and your mail was not sent. Please find an alternative method of contacting the webmaster.";
    }
}
?>
