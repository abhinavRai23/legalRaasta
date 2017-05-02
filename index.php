<?php include "connect.php"; ?>
<!DOCTYPE html>
<html>
<head>
	<title>Legal Raasta</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<?php
		// date_format(dob,'%d-%m-%Y')
		$query = "Select user_id, username, email, dob from users";
		$run = mysqli_query($db_server, $query);
		if(!$run)
			die(mysqli_error($db_server));
		else{
			$row = mysqli_num_rows($run);
		}
	?>
	<table width="100%" border="1" cellpadding="4" cellspacing="0" style="margin:1% 0 3% 0">
		<tr>
			<th align="center">Serial no</th>
			<th align="center">Name</th>
			<th>Email Id</th>
			<th>Date of Birth</th>
			<th>EDIT/DELETE</th>
		</tr>
		<?php
			for($i=1;$i<=$row;$i++){
				echo "<tr><td align='center'>".$i."</td>";
				$val = mysqli_fetch_row($run);
				echo "<td style='display:none;'>".$val[0]."</td>";
				echo "<td align='center' id='name".$val[0]."' >".$val[1]."</td>";
				echo "<td align='center' id='email".$val[0]."' >".$val[2]."</td>";
				echo "<td align='center' id='dob".$val[0]."' >".$val[3]."</td>";
				echo "<td align='center'> <a href='#' onclick='editForm(this)'>Edit</a> /
				                          <a href='#' onclick='deleteData(this)'>Delete</a></td>";
				echo "</tr>";
			}
		?>
	</table>
	<button onclick="addForm()" id="addNewBtn">Add New</button>
	<div id='addNew'></div>
</body>
<script src="js/jquery.js"></script>	
<script src="js/custom.js"></script>
</html>