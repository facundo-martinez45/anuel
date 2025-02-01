// Obtener el botón
const backToTopBtn = document.getElementById("backToTopBtn");

// Mostrar el botón al bajar cierta distancia
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Desplazarse suavemente al inicio al hacer clic
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
