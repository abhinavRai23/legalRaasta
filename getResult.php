<?php
	include "connect.php";
	//insert new data
	if( isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['dob'])  ){
		$username = sanitize($db_server,$_POST['username']);
		$email	  = sanitize($db_server,$_POST['email']);
		$password = sanitize($db_server,$_POST['password']);
		$dob      = sanitize($db_server,$_POST['dob']);
		$password = md5($password);

		$query = "insert into users values(NULL,'$username', '$email', '$dob', '$password')";
		$run = mysqli_query($db_server, $query);
	}

	//update Row
	elseif( isset($_POST['username']) && isset($_POST['email']) && isset($_POST['dob'])  && isset($_POST['userid'])){
		$username = sanitize($db_server,$_POST['username']);
		$email	  = sanitize($db_server,$_POST['email']);
		$dob      = sanitize($db_server,$_POST['dob']);
		$userid      = sanitize($db_server,$_POST['userid']);
		// update Query
		$query = "update users set username='$username', email='$email', dob='$dob' where user_id='$userid'";
		$run = mysqli_query($db_server, $query);
		$results = array();
		$results['name'] = $username;
		$results['email'] = $email;
		$results['dob'] = $dob;
		echo json_encode($results);
	}

	//delete row
	elseif(isset($_POST['userid'])){
		$userid = sanitize($db_server,$_POST['userid']);
		$query = "delete from users where user_id='$userid' ";
		$run = mysqli_query($db_server, $query);
	}

?>