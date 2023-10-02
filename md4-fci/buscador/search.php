<?php

$search = $_POST['buscador'];

// ESTO MEJOR ENCAPSULARLO EN EL CONFIG
$servername = "localhost";
$username = "root";
$password = "";
$db = "videojuegos";

$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error){
	die("Connection failed: ". $conn->connect_error);
}
//

$sql = "SELECT * FROM juegos WHERE titulo LIKE '%$search%'";

$result = $conn->query($sql);

if ($result->num_rows > 0){
while($row = $result->fetch_assoc() ){
	echo '<div class="ficha" style="background-color: lightgrey; width: 200px; margin: 10px; border: black solid 2px">'
	.$row["titulo"]. '<br>'
	.$row["plataforma"]. '<br>'
	.$row["precio"]. '<br>'.'
	</div>';
}
} else {
	echo "0 records";
}

$conn->close();

?>