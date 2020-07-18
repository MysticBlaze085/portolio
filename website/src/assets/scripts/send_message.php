<?php 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

//check if its an ajax request, exit if not
if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

    //exit script outputting json data
    $output = json_encode(
            array(
                'type' => 'error',
                'text' => 'Request must come from Ajax'
    ));

    die($output);
}

//check $_POST vars are set, exit if any missing
if (!isset($_POST["fullname"]) || !isset($_POST["email"]) || !isset($_POST["phonenumber"]) || !isset($_POST["message"])) {
    $output = json_encode(array('type' => 'error', 'text' => 'Input fields are empty!'));
    die($output);
}

//Sanitize input data using PHP filter_var().
$full_name = filter_var(trim($_POST["fullname"]), FILTER_SANITIZE_STRING);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$phone = filter_var(trim($_POST['phonenumber']), FILTER_SANITIZE_NUMBER_INT);
$company = filter_var(trim($_POST["company"]), FILTER_SANITIZE_STRING);
$message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

//additional php validation
if (strlen($full_name) < 4) { // If length is less than 4 it will throw an HTTP error.
    $output = json_encode(array('type' => 'error', 'text' => 'Name is too short!'));
    die($output);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { //email validation
    $output = json_encode(array('type' => 'error', 'text' => 'Please enter a valid email!'));
    die($output);
}
if(strlen($company) > 25) {
    $output = json_encode(array('type' => 'error', 'text' => 'Company Name is too long'));
    die($output);
}
if (strlen((string)$phone) < 10 && strlen((string)$phone) < 11 ) {
    $output = json_encode(array('type' => 'error', 'text' => 'Please enter a valid phone number!'));
    die($output);
}
if (strlen($message) < 5) { //check emtpy message
    $output = json_encode(array('type' => 'error', 'text' => 'Too short message!'));
    die($output);
}

$to = "<rayvendesigns@gmail.com>, <langhausen.enterprises@gmail.com>"; //Replace with recipient email address
//proceed with PHP email.

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
$headers[] = 'To: Melissa <mary@example.com>, Kelly <kelly@example.com>';
$headers[] = 'From: '.$email.;
$headers[] = 'Cc: birthdayarchive@example.com';
$headers[] = 'Bcc: birthdaycheck@example.com';


$subject = 'You have a inquiry for an L.E. Repair';

$body = '
New Customer Inquiry

Full Name: ' . $full_name . '
Email: ' . $email . '
Phone Number: ' . $phone . '
Company: ' . $company . '
Message: ' . $message ;

$sentMail = @mail($to, $subject, $body, implode('\r\n', $headers));
//$sentMail = true;
if (!$sentMail) {
    $output = json_encode(array('type' => 'error', 'text' => 'Could not send mail! Please contact administrator.'));
    die($output);
} else {
    $output = json_encode(array('type' => 'message', 'text' => 'Hi ' . $full_name . ' Thank you for your email'));
    die($output);
}
}
 ?>