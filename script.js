
document.addEventListener("DOMContentLoaded", () => {
  const pantalla = document.getElementById("pantallaEntrada");
  const abrirBtn = document.getElementById("abrirCarta");
  const musica = document.getElementById("musica");
  const musicBtn = document.getElementById("musicBtn");

  abrirBtn.addEventListener("click", async () => {
    pantalla.hidden = true;
    musicBtn.hidden = false;

    try {
      await musica.play();
    } catch (error) {
      musicBtn.textContent = "🎵 Toca para iniciar la música";
    }
  });

  musicBtn.addEventListener("click", async () => {
    if (musica.paused) {
      try {
        await musica.play();
      } catch (error) {
        console.error("No se pudo iniciar la música:", error);
      }
    } else {
      musica.pause();
    }
  });

  musica.addEventListener("play", () => {
    musicBtn.textContent = "⏸️ Pausar música";
  });

  musica.addEventListener("pause", () => {
    musicBtn.textContent = "🎵 Iniciar música";
  });
});
