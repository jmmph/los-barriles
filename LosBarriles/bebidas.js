
function mostrarSubcategoria(categoria) {
  document.querySelectorAll('.bebida-categoria').forEach(div => {
    div.classList.remove('visible');
    div.style.display = 'none';
  });
  const activa = document.getElementById(categoria);
  if (activa) {
    activa.style.display = 'flex';
    setTimeout(() => activa.classList.add('visible'), 10);
  }
}