// script.js - Repaso JS (hecho por mí)

document.addEventListener("DOMContentLoaded", () => {

    const temas = [
        {id: "variables", titulo: "1. Variables"},
        {id: "operadores", titulo: "2. Operadores"},
        {id: "condicionales", titulo: "3. Condicionales"},
        {id: "bucles", titulo: "4. Bucles"},
        {id: "arrays", titulo: "5. Arrays"},
        {id: "funciones", titulo: "6. Funciones"},
        {id: "dom", titulo: "7. DOM"},
        {id: "eventos", titulo: "8. Eventos"},
        {id: "math", titulo: "9. Math"},
        {id: "strings", titulo: "10. Strings"},
        {id: "fechas", titulo: "11. Fechas"},
        {id: "formularios", titulo: "12. Formularios"},
        {id: "errores", titulo: "13. Errores"}
    ];



    // Sidebar
    const sidebar = document.getElementById("sidebar-menu");
    temas.forEach(t => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="#${t.id}" class="block hover:text-yellow-400 transition-colors">${t.titulo}</a>`;
        sidebar.appendChild(li);
    });


    // ==================== INTERACTIVIDADES ====================
    window.evaluarNota = function() {
        let nota = parseFloat(document.getElementById("nota-input").value);
        let res = document.getElementById("resultado-nota");
        if (nota <= 10 && nota >= 9) res.textContent = "¡Sobresaliente! ";
        else if (nota <= 8 && nota >= 7) res.textContent = "Notable ";
        else if (nota <= 6 && nota >= 5) res.textContent = "Aprobado ";
        else if (nota <= 4 && nota >= 0) res.textContent = "Suspenso ";
        else res.textContent = "Nota no válida";
    };

    window.calcularSuma = function() {
        let n1 = parseFloat(document.getElementById("num1").value) || 0;
        let n2 = parseFloat(document.getElementById("num2").value) || 0;
        document.getElementById("resultado-suma").textContent = n1 + n2;
    };

    window.cambiarColorTarjeta = function(btn) {
        const colores = ["#eab308", "#84cc16", "#22d3ee", "#c026d3"];
        btn.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    };

    window.generarAleatorio = function() {
        let num = Math.floor(Math.random() * 100) + 1;
        document.getElementById("num-aleatorio").textContent = num;
    };

    window.validarFormulario = function(formu_molón) {
        formu_molón.preventDefault();
        let nombre = document.getElementById("form-nombre").value.trim();
        if (nombre.length > 2) {
            alert(" Formulario enviado!");
        } else {
            alert("El nombre es demasiado corto, debe ser más largo...y sin emojis 😜");
        }
    };

    console.log(" Repaso JS cargado - ¡Let's code!");
});