<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Form verilerini al
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // E-posta bilgileri
  $to = 'enesodabas5234@gmail.coö';  // E-postanın gönderileceği adres
  $email_subject = "New Contact Form Message: $subject";
  $email_body = "You have received a new message from the contact form.\n\n".
                "Here are the details:\n".
                "Name: $name\n".
                "Email: $email\n".
                "Subject: $subject\n".
                "Message:\n$message";

  // E-posta başlıkları
  $headers = "From: $email\n";
  $headers .= "Reply-To: $email";

  // E-postayı gönder
  if(mail($to, $email_subject, $email_body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Message sending failed.";
  }
}
?>
