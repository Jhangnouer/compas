<?php
header('Content-Type: application/json');

// Dummy object detection (you can replace this with actual AI detection logic)
$objects = [
    "Sebuah kursi di depan Anda",
    "Ada meja di sebelah kiri",
    "Anda berada di dekat jendela",
    "Sebuah buku terletak di meja"
];

// Select a random object description
$description = $objects[array_rand($objects)];

echo json_encode(['description' => $description]);
?>
