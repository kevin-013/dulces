function validar(){
    var email,contraseña;
    correo = document.getElementById("correo").value;
    contra = document.getElementById("contraseña").value;

    if (correo === ""){
        alert("El campo direccion esta vacio");
        return false;
    }
    if (contra === ""){
        alert("El campo contraceña esta vacio");
        return false;
    }
}