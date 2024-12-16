const express = require('express');
const app = express();
app.use(express.json());

var lista = [{
    id: '1',
    nombre: 'Yesenia'
}, {
    id: '2',
    nombre: 'Yeison'
}];

// Web service de tipo GET
app.get('/nombre', (req, res) => {
    res.json(lista);
});

app.get('/richely', (req, res)=>{
    res.send('Hola soy Richely branchito, me gusta la musica y todo lo que marea');
});

app.get('/suma', (req, resp)=>{
    let n1=4;
    let n2=9;
    let suma = n1+n2;
    resp.send(suma+'');
});


app.get('/suma/:n1', (req, resp) => {
    let num1 = parseInt(req.params.n1); // Acceder al parámetro de la ruta correctamente
    let num2 = 9;
    let suma = num1 + num2;
    resp.send('El resultado de la suma es: ' + suma);
});

app.listen(3000, () => {
    console.log('MELO');
});
