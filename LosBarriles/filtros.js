function filtrar(categoria) {
  const productos = document.querySelectorAll('.producto');
  productos.forEach(p => {
    p.style.display = p.classList.contains(categoria) ? 'block' : 'none';
  });
}
function mostrarDesayunos() {
  const bloque = document.getElementById('desayunos');
  bloque.style.display = bloque.style.display === 'none' ? 'block' : 'none';
}

