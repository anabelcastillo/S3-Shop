
// Exercise 7
function validateEmail(){
                
	// Get our input reference.
	//var fEmail = document.getElementById("fEmail");

	//var emailField = document.getElementById('user-email');
	S
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	

	// Using test we can check if the text match the pattern
	if( validEmail.test(fEmail.value) ){
		alert('Email is valid, continue with form submission');
		return true;
	}else{
		alert('Email is invalid, skip form submission');
		return false;
	}
} 

function validate() {
		// Example starter JavaScript for disabling form submissions if there are invalid fields
	(function () {
	  'use strict'
	
	  // Fetch all the forms we want to apply custom Bootstrap validation styles to
	  var forms = document.querySelectorAll('.needs-validation')
	
	  // Loop over them and prevent submission
	  Array.prototype.slice.call(forms)
		.forEach(function (form) {
		  form.addEventListener('submit', function (event) {
			if (!form.checkValidity()) {
			  event.preventDefault()
			  event.stopPropagation()
			}
	
			form.classList.add('was-validated')
		  }, false)
		})
	})()

	//var error = 0;
	// Get the input fields
	//var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	validateEmail();
	// Get the error elements
	//var errorName = document.getElementById("errorName");
	
	//var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
    // var input = document.getElementById('fName'); 
	// var form = document.getElementById('form');

	// var elem = document.createElement('div'); 
	// elem.id = 'notify'; elem.style.display = 'none'; form.appendChild(elem);

    // input.addEventListener('invalid', function(event){ event.preventDefault(); if ( ! event.target.validity.valid ) { elem.textContent = 'Username should only contain lowercase letters e.g. john'; elem.className = 'error'; elem.style.display = 'block'; input.className = 'invalid animated shake'; } });
    // input.addEventListener('input', function(event){ if ( 'block' === elem.style.display ) { input.className = ''; elem.style.display = 'none'; } });

	
	
	
	
	// if(fName.value == ""){
	// 	error++;
	// }

	// if(fEmail.value == ""){
	// 	error++;
	// }
	 
	// if(error>0){
	// 	alert("Error");
	// }else{
	// 	alert("OK");
	// }

}
