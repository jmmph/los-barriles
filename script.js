function ocultarTodo() {
  const secciones = [
    'desayunos',
    'raciones',
    'combinados',
    'bocadillos',
    'bolleria',
    'hamburguesas',
    'tostas',
    'ensaladas',
    'especiales'
  ];

  secciones.forEach(id => {
    const bloque = document.getElementById(id);
    if (bloque) {
      bloque.style.display = 'none';
      bloque.classList.remove('visible');
    }
  });
}

function mostrarSeccion(id) {
  ocultarTodo();
  const seccion = document.getElementById(id);
  if (seccion) {
    seccion.style.display = 'flex';
    setTimeout(() => seccion.classList.add('visible'), 10);
  }
}

