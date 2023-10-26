<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $score = $_POST['score'];
    file_put_contents('scores.txt', $score . PHP_EOL, FILE_APPEND);
}
?>
