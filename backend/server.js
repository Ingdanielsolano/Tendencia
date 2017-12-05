
var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors());
var bodyparser = require('body-parser');
var routes = require('./routes');
var facebook= require('./Facebook');

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

routes.configurar(app);


facebook.Validar();
//facebook.lookTendencia(request={idPost:"1025000047511369_1702132073131493"},null);


app.listen(8000, function () {
    console.log('Port: '+ 8000 +"\n");
})