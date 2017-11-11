<?php

$country = $_GET['country'];
$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';
$everything = $_GET['all'];

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

if ($country){
    $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
}elseif($everything){
    $stmt = $conn->query("SELECT * FROM countries");
}else {
    echo '';
}

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo '<ul>';
foreach ($results as $row) {
  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
}
echo '</ul>';


/*
$everything = $GET['all'];

$stm = $cnn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");

$result = $stm->fetchAll(PDO::FETCH_ASSOC);

echo '<ul>';
foreach ($result as $row) {
  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
}
echo '</ul>';*/

