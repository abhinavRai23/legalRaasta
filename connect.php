<?php
	$db_hostname = 'localhost';
	$db_database = 'test';
	$db_username =  'root';
	$db_password = '';
	$db_server = mysqli_connect($db_hostname, $db_username, $db_password, $db_database);
	if (!$db_server) die("Unable to connect to MySQL: ". mysqli_error($db_server));

function sanitize($db_server,$string)
{
	return htmlentities(mysql_fix_string($db_server,$string));
} 

function mysql_fix_string($db_server,$string)
{
	return mysqli_real_escape_string($db_server,$string);
}
?>