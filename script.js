// URL de la API de OpenWeatherMap
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
// Tu clave de API de OpenWeatherMap
const apiKey = '4e7b8a1a839f09ff2ac166798f435058';

// Obtener el pronóstico del clima actual
function obtenerPronosticoClima() {
  const ciudad = 'Buenos Aires';
  const url = `${apiUrl}?q=${ciudad}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperatura = data.main.temp;
      const temperaturaElement = document.getElementById('temperatura-actual');
      temperaturaElement.textContent = `Temperatura actual: ${temperatura}°C`;
    })
    .catch(error => {
      // Manejo de errores
      console.error('Error:', error);
    });
}

// Llamar a la función para obtener el pronóstico del clima de Buenos Aires
obtenerPronosticoClima();

