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

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Mostrando información del usuario con ID: ${userId}`);
});

app.get('/search', (req, res) => {
   const terms = req.query.terms || 'NO ESPECIFICADO';
   const category = req.query.category || 'Todas las categorías';
    res.send(`
         <h2>Resultados de búsqueda</h2>
            <p>Términos: ${terms}</p>
            <p>Categoría: ${category}</p>
        `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 