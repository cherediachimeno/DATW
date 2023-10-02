<?php
// including the database connection file
include_once("config.php");

if(isset($_POST['update']))
{	
	$id = $mysqli->real_escape_string($_POST['id']);
	$titulo = $mysqli->real_escape_string($_POST['titulo']);
	$plataforma = $mysqli->real_escape_string($_POST['plataforma']);
	$precio = $mysqli->real_escape_string($_POST['precio']);
	
	// checking empty fields
	if(empty($titulo) || empty($plataforma) || empty($precio)) {	
			
		if(empty($titulo)) {
			echo "<font color='red'>titulo field is empty.</font><br/>";
		}
		
		if(empty($plataforma)) {
			echo "<font color='red'>plataforma field is empty.</font><br/>";
		}
		
		if(empty($precio)) {
			echo "<font color='red'>Email field is empty.</font><br/>";
		}		
	} else {	
		//updating the table
		$sql = "UPDATE juegos SET titulo='$titulo',plataforma='$plataforma',precio='$precio' WHERE id=$id";
		$result = $mysqli->query($sql);
		//redirectig to the display pplataforma. In our case, it is index.php
		header("Location: index.php");
	}
}
?>
<?php
//getting id from url
$id = $_GET['id'];

//selecting data associated with this particular id

$sql = "SELECT * FROM juegos WHERE id=$id";
$result = $mysqli->query($sql);

if ($result->num_rows > 0){
while($row = $result->fetch_assoc() ) { 
	$titulo = $row['titulo'];
	$plataforma = $row['plataforma'];
	$precio = $row['precio'];
}
}

?>
<html>
<head>	
	<title>Edit Data</title>
</head>

<body>
	<a href="index.php">Home</a>
	<br/><br/>
	
	<form name="form1" method="post" action="update.php">
		<table border="0">
			<tr> 
				<td>titulo</td>
				<td><input type="text" name="titulo" value="<?php echo $titulo;?>"></td>
			</tr>
			<tr> 
				<td>plataforma</td>
				<td><input type="text" name="plataforma" value="<?php echo $plataforma;?>"></td>
			</tr>
			<tr> 
				<td>Email</td>
				<td><input type="text" name="precio" value="<?php echo $precio;?>"></td>
			</tr>
			<tr>
				<td><input type="hidden" name="id" value=<?php echo $_GET['id'];?>></td>
				<td><input type="submit" name="update" value="Update"></td>
			</tr>
		</table>
	</form>
</body>
</html>