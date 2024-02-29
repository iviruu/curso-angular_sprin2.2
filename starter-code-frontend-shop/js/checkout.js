
// Exercise 6
function validate() {
    var error = 0;

    
    var fName = document.getElementById("fName");
    var fLastN = document.getElementById("fLastN");
    var fEmail = document.getElementById("fEmail");
    var fPassword = document.getElementById("fPassword");
    var fPhone = document.getElementById("fPhone");
    var fAddress = document.getElementById("fAddress");

    
    var errorName = document.getElementById("errorName");
    var errorLastN = document.getElementById("errorLastN");
    var errorEmail = document.getElementById("errorEmail");
    var errorPassword = document.getElementById("errorPassword");
    var errorPhone = document.getElementById("errorPhone");
    var errorAddress = document.getElementById("errorAddress");

    
    function esMasLargo(fieldValue) {
        return fieldValue.trim().length >= 3;
    }

    function soloLetras(fieldValue) {
        return /^[A-Za-z\s]+$/.test(fieldValue.trim());
    }

    function soloNumeros(fieldValue) {
        return /^\d+$/.test(fieldValue.trim());
    }

    function patronEmail(fieldValue) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue.trim());
    }

    function letrasNumeros(fieldValue) {
        return /^[A-Za-z0-9]+$/.test(fieldValue.trim());
    }
	if (!esMasLargo(fName.value) || !soloLetras(fName.value)) {
		fName.classList.add("is-invalid"); 
		error++;
	} else {
		fName.classList.remove("is-invalid"); 
	}

    if (!esMasLargo(fLastN.value) || !soloLetras(fLastN.value)) {
		fLastN.classList.add("is-invalid"); 
		error++;
	} else {
		fLastN.classList.remove("is-invalid"); 
	}

    if (!esMasLargo(fEmail.value) || !patronEmail(fEmail.value)) {
        fEmail.classList.add("is-invalid"); 
		error++;
	} else {
		fEmail.classList.remove("is-invalid"); 
	}

    if (!esMasLargo(fAddress.value)) {
        fAddress.classList.add("is-invalid"); 
		error++;
	} else {
		fAddress.classList.remove("is-invalid"); 
	}

    if (!esMasLargo(fPassword.value) || !letrasNumeros(fPassword.value)) {
        fPassword.classList.add("is-invalid"); 
		error++;
	} else {
		fPassword.classList.remove("is-invalid"); 
	}
    if (!esMasLargo(fPhone.value) || !soloNumeros(fPhone.value)) {
        fPhone.classList.add("is-invalid"); 
		error++;
	} else {
		fPhone.classList.remove("is-invalid"); 
	}

    
    if(error > 0){
        alert("Hay errores en el formulario.");
    } else {
        alert("Formulario enviado correctamente.");
    }
}

