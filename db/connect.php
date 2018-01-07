<?php
	/* Connect to mySQL database */
    $host_name  = "";
    $database   = "";
    $user_name  = "";
    $password   = "";

    //$connect = mysqli_connect($host_name, $user_name, $password, $database);
	$conn = new mysqli($host_name, $user_name, $password, $dbname);
    
    if(mysqli_connect_errno()) {
		alert('Verbindung zum MySQL Server fehlgeschlagen: ' . mysqli_connect_error());
    }
    else {
		//echo '<p>Verbindung zum MySQL Server erfolgreich aufgebaut.</p>';
    }
?>