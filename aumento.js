function calcularAumento() {
    let sB = parseFloat(document.getElementById("sueldoInput").value);
    let aumento = 0;
    let nuevoSueldo = 0;
    let resultadoModal = document.getElementById("resultadoModal");

    if (isNaN(sB) || sB <= 0) {
        resultadoModal.textContent = "Por favor ingrese un sueldo válido mayor a 0.";
        abrirModal();
        return;
    }

    // Determinar porcentaje de aumento según los rangos
    if (sB <= 100000) {
        aumento = 0.138;
    } else if (sB <= 150000) {
        aumento = 0.052;
    } else if (sB <= 210000) {
        aumento = 0.141;
    } else if (sB <= 300000) {
        aumento = 0.205;
    } else if (sB <= 426000) {
        aumento = 0.165;
    } else if (sB <= 550000) {
        aumento = 0.089;
    } else if (sB <= 625000) {
        aumento = 0.051;
    } else if (sB <= 852000) {
        aumento = 0.059;
    } else if (sB <= 1052000) {
        aumento = 0.032;
    } else if (sB <= 1252000) {
        aumento = 0.017;
    } else if (sB <= 1500000) {
        aumento = 0.014;
    } else {
        aumento = 0.036;
    }

    // Calcular nuevo sueldo
    nuevoSueldo = sB + (sB * aumento);

    // Formatear sueldo con puntos cada 3 dígitos
    let sueldoFormateado = nuevoSueldo.toLocaleString('es');
    let sueldoBasicoFormateado = sB.toLocaleString('es'); // Sueldo ingresado

    // Mensaje que se mostrará dentro del Modal
    resultadoModal.innerHTML = `
Sueldo Básico: <strong>$${sueldoBasicoFormateado}</strong><br>
Porcentaje de Aumento: <strong>${(aumento * 100).toFixed(1)}%</strong><br>
--------------------------------------------<br>
Sueldo para el próximo año será: <strong>$${sueldoFormateado}</strong>`;

    // Mostrar el Modal
    abrirModal();
}

function abrirModal() {
    document.getElementById("modalOverlay").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modalOverlay").style.display = "none";
}

function toggleTabla() {
    const tabla = document.getElementById("tablaAumentos");
    if (tabla.style.display === "none") {
        tabla.style.display = "block";
    } else {
        tabla.style.display = "none";
    }
}
