const path = require('path');
const fse = require('fs-extra');
const prompt = require('prompt');
const child = require('child_process');
const exec = require('child_process')exec;



// Recogemos los datos esenciales a través del prompt
function datos_usuario(){
prompt.get([{
      type: 'input',
      name: 'nombre_paquete',
      message: "Introduzca un nombre para su aplicación\n",
      default: "Libro web"
     },{
       type: 'input',
       name: 'url',
       message: "Introduzca la URL de su repositorio git\n",
       require: true
     },{
       type: 'input',
       name: 'url_wiki',
       message: "Introduzca la URL de su wiki.\n"+
                "Si no está interesado en el despliegue de su wiki pulse intro",
     },{
      type: 'input',
      name: 'author',
      message: "Introduzca el nombre del autor:",
      require: true

     },], function (err, result) {
     // Log the results.
     console.log('  nombre paquete: ' + result.nombre_paquete);
     console.log('  url repo: ' + result.url);
     console.log('  url wiki: ' + result.url_wiki);
     console.log('  author ' + result.author);

      // Asignamos los datos individualmente
      name=result.nombre_paquete;
      repo_url=result.url;
      url_wiki = result.url_wiki
      author=result.author;
   });
}// final datos_usuario

// Recogida de argumentos
const argumentos = require('minimist')(process.argv.slice(2));


// Contemplamos las diferentes opciones

// HELP
if (argumentos.h || argumentos.help){
  console.log("\ngitbook-start [OPTIONS]\n"+
    "--directorio <nombre directorio>\n\n\n\n"+
"\tEjemplo de uso: gitbook-start --directorio DEMO\n");

}// final HELP
