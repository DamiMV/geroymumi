// CONFIGURA TU FECHA AQUÍ
const eventDate = new Date("may 15, 2026 18:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Cálculos de tiempo
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Escribir en el HTML (añadiendo un 0 delante si es menor a 10)
    document.getElementById("days").innerText = d < 10 ? "0" + d : d;
    document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
    document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
    document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;

    // Si el tiempo termina
    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown-container").innerHTML = "<h3>¡ES HOY!</h3>";
    }
}, 1000);

function mostrarCartel1() {
    document.getElementById('cartel-regalo').style.display = 'flex';
}

function cerrarCartel1() {
    document.getElementById('cartel-regalo').style.display = 'none';
}

function mostrarCartel() {
    document.getElementById('cartel-fotosinvitados').style.display = 'flex';
}

function cerrarCartel() {
    document.getElementById('cartel-fotosinvitados').style.display = 'none';
}


const audio = document.getElementById('miAudio');
const btn = document.getElementById('music-control');
const icon = document.getElementById('music-icon');

// Función para alternar música
function toggleMusic() {
    if (audio.paused) {
        audio.play();
        icon.innerText = "PAUSE";
    } else {
        audio.pause();
        icon.innerText = "PLAY";
    }
}

// Escuchar el clic en el botón
btn.addEventListener('click', toggleMusic);

// TRUCO PARA AUTO-PLAY: 
// Como el navegador bloquea el play automático, 
// activamos la música al primer clic que el usuario haga en la PÁGINA.
document.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        icon.innerText = "PAUSE";
    }
}, { once: true }); // Solo lo hace una vez para no interrumpir después

document.getElementById('btn-mapa').addEventListener('click', function() {
    const mapContainer = document.getElementById('map-container');
    
    if (mapContainer.classList.contains('mostrar')) {
        mapContainer.classList.remove('mostrar');
        this.textContent = 'VER UBICACIÓN';
    } else {
        mapContainer.classList.add('mostrar');
        this.textContent = 'OCULTAR MAPA';
        
        // Scroll suave hacia el mapa al abrirlo
        setTimeout(() => {
            mapContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
});