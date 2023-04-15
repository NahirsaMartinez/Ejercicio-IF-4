
const INGREDIENTES_SOPA = "Agua,Verduras,Carne o Pollo";

var ingredienteCondimento = confirm("Hay condimentos para la sopa?");
var ingredienteCuboCaldo = confirm ("Hay un Cubo de caldo para la sopa?");

if (INGREDIENTES_SOPA && ingredienteCondimento) {
    alert ("El robot realizo la sopa con condimentos satisfactoriamente")
}  else if (INGREDIENTES_SOPA && ingredienteCuboCaldo) {
    alert ("El robot realizo la sopa con un cubo de caldo satisfactoriamente")
} else{
 alert ("La sopa no se realizo por falta de ingredientes necesarios")
}

