// Función que se ejecuta cuando se presiona el botón
function reverseText() {

    // Obtener el texto escrito por el usuario
    let text = document.getElementById("textInput").value;

    // Convertir el texto en un arreglo, invertirlo y volver a unirlo
    let reversed = text.split("").reverse().join("");

    // Mostrar el resultado en la página
    document.getElementById("result").textContent = reversed;
}