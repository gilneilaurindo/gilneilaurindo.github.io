<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Usando o servidor SMTP do Gmail
        $mail->SMTPAuth = true;
        $mail->Username = 'gilneycriative@gmail.com'; // Seu endereço de e-mail
        $mail->Password = 'sua-senha'; // Sua senha de aplicativo
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinatário
        $mail->setFrom($email);
        $mail->addAddress('gilneycriative@gmail.com'); // Seu e-mail para receber as mensagens

        // Conteúdo
        $mail->isHTML(true);
        $mail->Subject = 'Nova Mensagem de Contato';
        $mail->Body = "Email: $email<br><br>Mensagem:<br>$mensagem";

        $mail->send();
        echo 'Mensagem enviada com sucesso!';
    } catch (Exception $e) {
        echo "A mensagem não pode ser enviada. Erro do Mailer: {$mail->ErrorInfo}";
    }
} else {
    echo 'Método de requisição inválido.';
}
?>
