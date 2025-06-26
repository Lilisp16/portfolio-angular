document.addEventListener("DOMContentLoaded", function() {
  // Seleccionamos todos los elementos con la clase 'circle-progress'
  const circles = document.querySelectorAll('.circle-progress');

  circles.forEach(circle => {
    // Verificamos si el círculo tiene un atributo 'r' válido
    let radius = circle.getAttribute('r');
    if (radius) {
      let radiusValue = parseFloat(radius);
      let circumference = 2 * Math.PI * radiusValue;

      let progress = circle.getAttribute('data-progress');
      let offset = circumference - (progress / 100) * circumference;

      // Configuramos el estilo del borde dinámico
      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = offset;

      // Agregar un borde de color azul-neón
      circle.style.stroke = $azul-neon; // Puedes usar la variable de tu color azul-neón aquí

      // Mostrar el porcentaje en el centro del círculo
      let percentageText = circle.closest('.skill-card').querySelector('.percentage');
      if (percentageText) {
        percentageText.textContent = progress + '%';
      }
    }
  });
});
