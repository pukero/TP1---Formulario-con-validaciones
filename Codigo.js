function ValidarNombre(){
    let nombre = document.getElementById("nombre").value;
    let mensajeError = document.getElementById("Error");
    if (nombre.length < 3){
        mensajeError.innerHTML = "Este nombre debe tener minimo 3 caracteres";
        return false;
    }
    else{
        mensajeError.innerHTML="";  
        return true;
    }
    
}



function ValidarContraseña()
{
    let Contraseña = document.getElementById("contraseña").value;
    let mensajeErrorContraseña = document.getElementById("ErrorContraseña");
    let regexNumero = /[0-9]/;
    let regexLetra = /[a-zA-Z]/;
   
    if(Contraseña.length <= 8 || !regexNumero.test(Contraseña) || !regexLetra.test(Contraseña))
    {
        mensajeErrorContraseña.innerHTML = "Esta contraseña no es valida, debe contener al menos, 8 caracteres, un número y una letra";
        return false;
    }
    else{
        mensajeErrorContraseña.innerHTML="";
        return false;
    }
    
}

function ConfirmarContraseña()
{
    let ConfirmarContraseña = document.getElementById("contraseñaVal").value;
    let Contraseña = document.getElementById("contraseña").value;
    let mensajeErrorContraseñaConf = document.getElementById("ErrorContraseñaConfirmada");
    if (ConfirmarContraseña==Contraseña)
    {
        mensajeErrorContraseñaConf.innerHTML = "";
        return true;
    }
    else 
    {
        mensajeErrorContraseñaConf.innerHTML = "Las contraseñas no coinciden";
        return false;
    }
}
function ValidarEmail(){
                
	let mail = document.getElementById("mail").value;
	let mensajeErrorMail = document.getElementById("ErrorMail")
	let validarEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
	if(validarEmail.test(mail) ){
		mensajeErrorMail.innerHTML= "";
		return true;
	}else{
		mensajeErrorMail.innerHTML="El mail no es valido";
		return false;
	}
} 


    let MensajeFinal = document.getElementById("TextoBoton");
    document-getElementById("formulario").addEventListener("submit", function(event){
        event.preventDefault()
        let NombreOk=ValidarNombre();
        let ContraseñaOk=ValidarContraseña();
        let ContraseñaConfOk=ConfirmarContraseña();
        let EmailOk=ValidarEmail();
    if(!NombreOk || !ContraseñaOk || !ContraseñaConfOk || !EmailOk)
    {
        MensajeFinal.innerText = "";
    }
    else{
        MensajeFinal.innerText = "Se envio el formulario correctamente!";
    }
});
    
    


