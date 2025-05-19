
var total = 0;
function validar() {
    var cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
    var dato = document.getElementById("dni").value;
    var numero = dato.substr(0, 8);
    var resultado = numero % 23;
    var letra = cadena[resultado];
    var nif = numero + letra;
    if (dato != nif) {
        alert("El DNI no es correcto");
    }
}
function completar() {
    var cant = document.getElementById("vehiculos").value;
    var contenido = document.getElementById("contenido");
    contenido.innerHTML = ""; // Limpiar contenido previo

    for (let i = 1; i <= cant; i++) {
        // Crear una fila de la tabla con IDs únicos
        contenido.innerHTML += `
        <table>
            <tr>
                <th>Matricula</th>
                <th>Motor</th>
                <th>Estado</th>
                <th>Observacion</th>
                <th>Total</th>
            </tr>
            <tr>
                <td><input type='text'></td>
                <td>
                    <select id='motor${i}' onclick='precio(${i})'>
                        <option value=''>Seleccione un motor</option>
                        <option value='Gasolina'>Gasolina</option>
                        <option value='Diesel'>Diesel</option>
                        <option value='Hibrido'>Hibrido</option>
                        <option value='Electrico'>Electrico</option>
                    </select>
                </td>
                <td>
                    <input type='radio' id='radio1-${i}' name='estado${i}' value='Apto' onclick="estado(${i}, 'Pasa la ITV')"> Apto
                    <input type='radio' id='radio2-${i}' name='estado${i}' value='No Apto' onclick="estado(${i}, 'No pasa la ITV')"> No Apto
                </td>
                <td><input type='text' id='observacion${i}' readonly></td>
                <td id='total${i}'></td>
            </tr>
        </table>`;
    }
}

function precio(index) {
    // Obtener el valor del motor seleccionado
    var motor = document.getElementById(`motor${index}`).value;
    var precio = 0;

    // Determinar el precio según el motor
    if (motor === "Gasolina") {
        precio = 45;
    } else if (motor === "Diesel") {
        precio = 50;
    } else if (motor === "Hibrido") {
        precio = 35;
    } else if (motor === "Electrico") {
        precio = 30;
    }

    // Mostrar el precio en el campo correspondiente
    document.getElementById(`total${index}`).innerHTML = precio;

    total = precio + total;

}
    // Mostrar si pasa o no pasa la ITV
function estado(id, mensaje) {
    document.getElementById(`observacion${id}`).value = mensaje;

}
    //Resetear los valores seleccionados
function reset() {
    document.getElementById("pago").innerHTML = "";
    total = 0;
}
    //Mostrar el precio total
function pagar() {

    document.getElementById("pago").innerHTML = total + "€";
}
