//Ejercicio 4: Verificación de contraseña
//Solicita al usuario ingresar una contraseña utilizando prompt("Ingresa tu contraseña"). Si la contraseña es "secreto123", muestra un mensaje de acceso concedido con alert(). De lo contrario, muestra un mensaje de acceso denegado.

let C=contraseñaIngresada  = prompt("Ingresa tu contraseña");
if (contraseñaIngresada === "secreto123") {
  alert("Acceso consedido");
} else {
  alert("Acceso denegado");
}