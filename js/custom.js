function validateEmail(email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test(email);
}

function validateAddForm(){
	var username = $('#username').val();
	var	email= $("#email").val();
	var password= $("#password").val();
	var dob= $("#dob").val();
	var flag=1;var msg = '';
	if(!username.length || !email.length || !dob.length || !password.length){
	 	msg ="*Please Fill all Fields";
	 	flag=0;	
	}
	else if(username.length>25){
		msg ="*Name should have less than 26 characters"; 
		flag=0;
	}
	else if( !validateEmail(email)){
		msg ="Enter Valid Email Address";
		flag=0;
	}

	else if(password.length>10){
		msg ="*Password should have less than 11 characters"; 
		flag=0;	
	}
	$("#msg").text(msg);
	return flag;
}

function addNewData(){
	if(validateAddForm()){
		var formData = {
			username: $("#username").val(),
			email: $("#email").val(),
	    	password: $("#password").val(),
	    	dob: $("#dob").val()
	    }
	    $.ajax({
	    	type: 'POST',
	    	url: 'getResult.php',
	    	data: formData, 
	    	success: function(results){
	    		window.location.href = 'index.php';
	    }});
}}

function validateUpdateForm(){
	var username = $('#username').val();
	var	email= $("#email").val();
	var dob= $("#dob").val();
	var flag=1;var msg = '';
	if(!username.length || !email.length || !dob.length){
	 	msg ="*Please Fill all Fields";
	 	flag=0;	
	}
	else if(username.length>25){
		msg ="*Name should have less than 26 characters"; 
		flag=0;
	}
	else if( !validateEmail(email)){
		msg ="Enter Valid Email Address";
		flag=0;
	}
	$("#msg").text(msg);
	return flag;
}

function updateData(id){
	if(validateUpdateForm()){
		var formData = {
			userid : id,
			username: $("#username").val(),
			email: $("#email").val(),
	    	dob: $("#dob").val()
	    }
	    $.ajax({
	    	type: 'POST',
	    	url: 'getResult.php',
	    	data: formData, 
	    	success: function(results){
	    		var results = JSON.parse(results);
	    		$('#name'+id).text(results['name']);
	    		$('#email'+id).text(results['email']);
	    		$('#dob'+id).text(results['dob']);
	    		$('#addNew').hide();
	    		$('#addNewBtn').show();
	    }});
}}

function deleteData(del){
	var userid= del.parentNode.parentNode;
	var id = userid.children[1].textContent;
	var formData = {
		userid: id
    }
    $.ajax({
    	type: 'POST',
    	url: 'getResult.php',
    	data: formData, 
    	success: function(results){
    		userid.style.display = 'none';
    }});
}

function addForm(){
	$('#addNewBtn').hide();
	$('#addNew').show();
	document.getElementById("addNew").innerHTML= '<div style="border: 1px solid #ddd; margin: 1% 35% 0 35%" align="center"><div id="msg" style="color:red"></div><input type="text" name="username" id="username" placeholder="Enter Name"><br><input type="email" name="email" id="email" placeholder="Enter Email Id"><br><input type="date" name="dob" id="dob" placeholder="Enter Date of Birth"><br><input type="password" name="password" id="password" placeholder="Enter Password"><br><input type="submit" value="Submit" style="width: 20%;" onclick="addNewData()" ></div>';
}

function editForm(edit){

	var user = edit.parentNode.parentNode;
	var id   = user.children[1].textContent;
	var name = user.children[2].textContent;
	var email = user.children[3].textContent;
	var dob = user.children[4].textContent;
	$('#addNewBtn').hide();
	$('#addNew').show();
	document.getElementById("addNew").innerHTML= '<div style="border: 1px solid #ddd; margin: 1% 35% 0 35%" align="center"><div id="msg" style="color:red"></div><input type="text" name="username" id="username" value="'+name+'"><br><input type="email" name="email" id="email" value="'+email+'"><br><input type="date" name="dob" id="dob" value="'+dob+'"><br><input type="submit" value="Submit" style="width: 20%;" onclick="updateData('+id+')" ></div>';
}

// function hideForm(){
// 	document.getElementById("addNew").style.display= "none";
// }