const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Curso de express js V1</h1>
        <p>Esto es una aplicacion Nodejs con Expressjs</p>
        <p>Corre en el puerto ${PORT}.</p>
        `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 