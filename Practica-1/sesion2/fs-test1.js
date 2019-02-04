var fs = require('fs');

//-- Funcion llamada cuando se ha terminado de leer el fichero
function show_file(err, data) {
    console.log(data)
}
//-- Leer el fichero. Al terminar se invoca a la función show_file
fs.readFile('test.txt', 'utf8', show_file);
