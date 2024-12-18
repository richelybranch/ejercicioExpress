const express = require('express');
const app = express();
app.use(express.json());

var lista = [{
    id: '1',
    nombre: 'Richely'
}, {
    id: '2',
    nombre: 'Paul'
}];

// Web service de tipo GET
app.get('/nombre', (req, res) => {
    res.json(lista);
});

app.get('/richely', (req, res) => {
    res.send('Hola soy Richely branchito, me gusta la música y todo lo que marea');
});

app.get('/suma', (req, resp) => {
    let n1 = 4;
    let n2 = 9;
    let suma = n1 + n2;
    resp.send(suma + '');
});

app.get('/suma/:n1', (req, resp) => {
    let num1 = parseInt(req.params.n1); // Acceder al parámetro de la ruta correctamente
    let num2 = 9;
    let suma = num1 + num2;
    resp.send('El resultado de la suma es: ' + suma);
});

// Servicio para calcular área y perímetro del rectángulo
app.get('/rectangulo/:base/:altura', (req, resp) => {
    let base = parseFloat(req.params.base);
    let altura = parseFloat(req.params.altura);
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    resp.send(`El área del rectángulo es: ${area}, y el perímetro es: ${perimetro}`);
});

// Servicio para calcular área y perímetro del cuadrado
app.get('/cuadrado/:lado', (req, resp) => {
    let lado = parseFloat(req.params.lado);
    let area = lado * lado;
    let perimetro = 4 * lado;
    resp.send(`El área del cuadrado es: ${area}, y el perímetro es: ${perimetro}`);
});

// Servicio para calcular área y perímetro del rombo
app.get('/rombo/:diagonalMayor/:diagonalMenor/:lado', (req, resp) => {
    let diagonalMayor = parseFloat(req.params.diagonalMayor);
    let diagonalMenor = parseFloat(req.params.diagonalMenor);
    let lado = parseFloat(req.params.lado);
    let area = (diagonalMayor * diagonalMenor) / 2;
    let perimetro = 4 * lado;
    resp.send(`El área del rombo es: ${area}, y el perímetro es: ${perimetro}`);
});

// Levantar el servidor
app.listen(3000, () => {
    console.log('MELO');
});
