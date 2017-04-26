
<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phoneoremail'])&&$_POST['phoneoremail']!="")&&(isset($_POST['message'])&&$_POST['message']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'krasovskiyk@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Записаться с сайта FENEX'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон или почта: '.$_POST['phoneoremail'].'</p>        
                        <p>Сообщение: '.$_POST['message'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <krasovskiyk@gmail.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>