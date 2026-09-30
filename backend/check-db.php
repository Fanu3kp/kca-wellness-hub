<?php
$attempts = [
    ['host' => 'localhost', 'port' => 3306, 'user' => 'root', 'pass' => '', 'label' => 'localhost, empty pass'],
    ['host' => '127.0.0.1', 'port' => 3306, 'user' => 'root', 'pass' => '', 'label' => '127.0.0.1, empty pass'],
    ['host' => 'localhost', 'port' => 3306, 'user' => 'root', 'pass' => 'password', 'label' => 'localhost, pass=password'],
    ['host' => '127.0.0.1', 'port' => 3306, 'user' => 'root', 'pass' => 'password', 'label' => '127.0.0.1, pass=password'],
    ['host' => '127.0.0.1', 'port' => 3306, 'user' => 'root', 'pass' => 'mysql', 'label' => '127.0.0.1, pass=mysql'],
    ['host' => '127.0.0.1', 'port' => 3306, 'user' => 'root', 'pass' => 'xampp', 'label' => '127.0.0.1, pass=xampp'],
    ['host' => '127.0.0.1', 'port' => 3306, 'user' => 'root', 'pass' => 'secret', 'label' => '127.0.0.1, pass=secret'],
];

foreach ($attempts as $cfg) {
    try {
        $pdo = new PDO("mysql:host={$cfg['host']};port={$cfg['port']}", $cfg['user'], $cfg['pass'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_TIMEOUT => 3
        ]);
        echo "SUCCESS: {$cfg['label']}" . PHP_EOL;
        $pdo = null;
        break;
    } catch (Exception $e) {
        echo "FAIL: {$cfg['label']} - " . $e->getMessage() . PHP_EOL;
    }
}
