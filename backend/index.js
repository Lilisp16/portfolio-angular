const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Habilitar CORS para que el frontend (en otro puerto) pueda hacer peticiones a este backend
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes (si lo necesitas)
app.use(express.json());

// Ruta que responde a la solicitud GET en '/api'
app.get('/api', (req, res) => {
  res.json({ message: '¡Hola Developer desde el backend!' });
});

// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
