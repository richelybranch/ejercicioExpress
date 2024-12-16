const express = require ('express');
const app = express();
app.use(express.json());

var lista = [{
    id: '1',
    nombre: 'Yesenia'
},{
    id: '2',
    nombre: 'Yeison'
}];

//web service de tipo GET

app.get('/nombre', (req, res)=>{
    res. json(lista);
});

app.listen(3000,(){
    console.log('MELO');
})