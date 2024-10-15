const express = require('express');
const app = express();
app.use(express.json());

// Ejemplo de base de datos en memoria (debes reemplazarlo con una base de datos real como MongoDB, MySQL, etc.)
const usuarios = [];

app.post('/api/register', (req, res) => {
    const { usuario, contraseña } = req.body;

    if (!usuario || !contraseña) {
        return res.status(400).json({ error: 'Usuario y contraseña son requeridos' });
    }

    // Agrega lógica para validar si el usuario ya existe
    const userExists = usuarios.find(u => u.usuario === usuario);
    if (userExists) {
        return res.status(400).json({ error: 'El usuario ya existe' });
    }

    // Guardar el nuevo usuario
    usuarios.push({ usuario, contraseña });

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
});

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});