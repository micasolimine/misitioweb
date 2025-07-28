document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;

  document.getElementById('respuesta-formulario').textContent =
    `Gracias, ${nombre}. Tu mensaje ha sido recibido. (Este formulario es solo de prueba 😄)`;

  this.reset();
});
