//funcion para que 
function addToDisplay (value) {
    document.getElementById('display').value += value;
}
//funcion para que calcule la aperacion
function calculate() { 
    var expression = document.getElementById ('display').value;
    var result = eval (expression); //la funcion eval toma la cadena expression y la ejecuta 
    document.getElementById('display') .value = result;
}
//funcion para que el signo = muestre el resultado 
function clearDisplay() {
    document.getElementById('display') .value = '';
}