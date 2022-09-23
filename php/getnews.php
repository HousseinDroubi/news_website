<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");  
$get_news=$mysqli->prepare("SELECT * FROM news");
$get_news->execute();
$array_get_news=$get_news->get_result();
$response=[];
$return=[];
while($a = $array_get_news->fetch_assoc()){
    $return['title']=$a['title'];
    $return['text']=$a['text'];
    $response[]=$return;
}
echo json_encode($response);