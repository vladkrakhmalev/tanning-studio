<?php 

$name = $_POST['name'];
$tel = $_POST['tel'];
$mess = $_POST['message'];

$subject = 'light-flower@yandex.ru';
$title = "Заявка с сайта";
$message = "";

if ($name) {
  $message = $message . 'Имя: ' . $name . "\r\n";
}
if ($tel) {
  $message = $message . 'Телефон: ' . $tel . "\r\n";
}
if ($mess) {
  $message = $message . 'Комментарии: ' . $mess . "\r\n";
}

if(mail($subject, $title, $message)) {
  echo json_encode(array('success' => 1));
} else {
  echo json_encode(array('success' => 0));
}



?>