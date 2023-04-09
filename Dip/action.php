<?php
if(isset($_POST["name"]) && isset($_POST["age"]) {
	$name = htmlentities($_POST["name"]);
    $age = htmlentities($_POST["age"]);
    $out = "
	<html>
    <head>
    <title>Анкета</title>
    </head>
    <body>
    Вас зовут $name
    Возраст $age
    "
    echo $out
} else
{   
    echo "Введенные данные некорректны";
}
?>