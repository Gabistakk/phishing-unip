<?php

$login = $_GET['wfphshr-login'];

$pass = $_GET['wfphshr-pass'];

$db = new PDO('sqlite:database.sqlite', '', '', [
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
]);

$db->exec("CREATE TABLE IF NOT EXISTS user(
id INTEGER PRIMARY KEY AUTOINCREMENT,
login VARCHAR(255),
pass VARCHAR(255)
);");

$stmt = $db->prepare("INSERT INTO user(login, pass) VALUES (?, ?)");

$stmt->execute([$login, $pass]);

?>