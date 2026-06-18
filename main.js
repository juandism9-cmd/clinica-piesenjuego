document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById("main-footer");
    
    // 1. Cargamos el footer automático en su sitio correspondiente siempre
    if (footerContainer) {
        fetch("footer.html")
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error("Error cargando el footer:", error));
    }

    // 2. TRUCO DE MAGIA: Filtramos si es página legal por la URL
    const urlActual = window.location.href.toLowerCase();
    if (urlActual.includes("aviso") || urlActual.includes("privacidad") || urlActual.includes("cookies")) {
        
        // Buscamos el contenedor principal de la página legal
        const contenedorLegal = document.querySelector(".seccion-paginas");
        
        if (contenedorLegal) {
            // Creamos un contenedor específico para el botón
            const divVolver = document.createElement("div");
            divVolver.style.textAlign = "center";
            divVolver.style.marginTop = "20px";
            divVolver.style.marginBottom = "20px";
            
            // Le metemos el enlace adaptado con color azul corporativo oscuro para fondo claro
            divVolver.innerHTML = `
                <a href="#" onclick="window.history.back(); return false;" style="display: inline-block; color: #1a365d; text-decoration: none; font-weight: bold; font-size: 1.05rem; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">&larr; Volver Atrás</a>
            `;
            
            // Lo añadimos al final de la sección, justo debajo del cuadro blanco informativo
            contenedorLegal.appendChild(divVolver);
        }
    }
});