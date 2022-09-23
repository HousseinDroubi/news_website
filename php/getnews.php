<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");
$get_news=$mysqli->prepare("SELECT * FROM news");
$get_news->execute();
$array_get_news=$get_news->get_result();
$resonse=[];
while($a = $array_get_news->fetch_assoc()){
    $resonse[]=$a;
}
echo json_encode($resonse);