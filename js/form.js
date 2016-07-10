var form = document.getElementById("form-contact");

var inputConocido = document.getElementsByName("conocido");
var inputOtros = document.createElement('input');

inputOtros.setAttribute("id", "otros-conocido");
inputOtros.setAttribute("type", "text");
inputOtros.setAttribute("name", "otros-conocido");
inputOtros.setAttribute("placeholder", "Escribe otro medio");
inputOtros.setAttribute("required", "");

for (var i=0; i < inputConocido.length; i++){
	inputConocido[i].addEventListener('click', function() {
		if (this.value == "otros") {
			this.parentNode.appendChild(inputOtros);
		} else {
			if(document.getElementById("otros-conocido")) {
				document.getElementById("otros").parentNode.removeChild(inputOtros);	
			}	
		}
	});
}


form.addEventListener("submit", function(evt){
	var inputNombre = document.getElementById("nombre");
	var conocidoRadioInput = {
		"facebook": document.getElementById("facebook"),
		"google":  document.getElementById("google"),
		"linkedin":  document.getElementById("linkedin"),
		"otros":  document.getElementById("otros")
	};

	var inputEmail = document.getElementById("email");
	var inputTelefono = document.getElementById("telefono");
	var inputMensaje = document.getElementById("mensaje");
	var textoArea = document.getElementById("mensaje").value;
	var textoDividido = textoArea.split(" ");
	var contadorPalabras = textoDividido.length;

	if (inputNombre.checkValidity() == false) {
		alert("Escribe tu nombre");
		inputNombre.focus();
		evt.preventDefault();
		return false;
	}

	if (inputEmail.checkValidity() == false) {
		alert("Escribe tu email");
		inputEmail.focus();
		evt.preventDefault();
		return false;
	}

	if (conocidoRadioInput.facebook.checkValidity() == false) {
		alert("Selecciona la forma en la que me conociste");
		evt.preventDefault();
		return false;
	}

	if (document.getElementById("otros-conocido")){
		if (document.getElementById("otros-conocido").checkValidity() == false) {
			alert("Selecciona la forma en la que me conociste");
			document.getElementById("otros-conocido").focus();
			evt.preventDefault();
			return false;
		}
	}	

	if (inputTelefono.checkValidity() == false) {
		alert("Introduce un número de teléfono");
		evt.preventDefault();
		return false;
	}

	if (inputMensaje.checkValidity() == false){
		alert("Introduce un mensaje");
		inputMensaje.focus();
		evt.preventDefault();
		return false;
	} 
		
	if(contadorPalabras > 150) {
		alert("Has introducido demasiadas palabras. El máximo son 150");
		inputMensaje.focus();
		evt.preventDefault();
		return false;
	}
	;
});