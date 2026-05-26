const express = require('express');
const app = express();

// Middleware para recibir datos en formato JSON
app.use(express.json());

// --- RUTAS DE LA PREGUNTA 7 ---

// 1. Ruta principal
app.get('/', (req, res) => {
    res.send('¡Servidor de la semana 5 corriendo!');
});

// 2. Ruta de saludo
app.get('/saludo', (req, res) => {
    res.send('¡Hola! Bienvenido al servicio de salud.');
});

// 3. Ruta con parámetro dinámico
app.get('/mensaje/:nombre', (req, res) => {
    const nombreUsuario = req.params.nombre;
    res.send(`Hola ${nombreUsuario}, este es un mensaje personalizado.`);
});

// --- RUTA DE LA PREGUNTA 8 (POST) ---
app.post('/reporte', (req, res) => {
    const mensaje = req.body.mensaje;
    res.json({
        estado: "Reporte recibido",
        mensaje: mensaje
    });
});

// Configuración del puerto en el 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
