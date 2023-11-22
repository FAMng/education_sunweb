<?php

function calculateFibonacci($length)
{
    $fibonacci = array();

    if ($length >= 1) {
        $fibonacci[] = 0;
    }

    if ($length >= 2) {
        $fibonacci[] = 1;
    }

    for ($i = 2; $i < $length; $i++) {
        $fibonacci[$i] = $fibonacci[$i - 1] + $fibonacci[$i - 2];
    }

    return $fibonacci;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $length = isset($_POST["length"]) ? $_POST["length"] : 10; // Default length is 10
    $result = calculateFibonacci($length);
    echo json_encode($result);
}


