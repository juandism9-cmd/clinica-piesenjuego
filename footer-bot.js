document.addEventListener("DOMContentLoaded", function() {
    const contenedor = document.createElement("div");
    contenedor.className = "botones-contacto-movil";
    contenedor.innerHTML = `
        <a href="tel:+34614599759" class="btn-movil llamanos">
            <i class="fas fa-phone-alt"></i> ¡Llámanos!
        </a>
        <a href="https://wa.me/34614599759" class="btn-movil whatsapp">
            <i class="fab fa-whatsapp"></i> Pide tu cita
        </a>
        <a href="https://instagram.com/piesenjuego_podologia/" target="_blank" class="btn-movil instagram">
            <i class="fab fa-instagram"></i> Visítanos en Instagram!
        </a>
    `;
    document.body.appendChild(contenedor);
});