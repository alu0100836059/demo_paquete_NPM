const path = require('path');
const fse = require('fs-extra');
const prompt = require('prompt');
const child = require('child_process');
const exec = require('child_process').exec;



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

// Generar estructura del directorio
function estructura(directorio){
      //CREACION DE LOS DIRECTORIOS TXT, SCRIPTS, Y LA CARPETA A GENERAR

      //creamos el directorio raiz
      fs.createDir("./" + directorio, function(err){
            if(err)
              console.log(err);
            console.log("Directorio "+directorio+" creado...\n");
        	});


          //creamos el directorio txt
          fs.createDir("./" + directorio + "/txt", function(err){
            if(err)
              console.log(err);
            console.log(directorio+"/txt creado...\n");
        	});


        	//creamos el directorio scripts
        	fs.createDir("./" + directorio + "/scripts", function(err){
            if(err)
              console.log(err);
            console.log(directorio+"/scripts creado...\n");
        	});


        	//copiamos lo que hay en txt y lo ponemos en el txt creado
          fs.copyDir(path.join(__dirname, '..','txt'), "./" + directorio + "/txt", function (err) {
          	if (err)
              console.error(err)
            console.log("Copiando contenido de txt...\n");
        	});


          //copiamos lo que hay en scripts y lo ponemos en el spripts creado
          fs.copyDir(path.join(__dirname, '..', 'scripts'), "./" + directorio + "/scripts", function (err) {
          	if (err)
              console.error(err)
            console.log("Copiando contenido de scripts...\n");
        	});


          //copiamos gulpfile
          fs.copyFile(path.join(__dirname,'..','gulpfile.js'), "./" + directorio + "/gulpfile.js",function(err){
            if(err)
              console.log(err);
            console.log("Copiando contenido gulpfile.js...\n");
          });


          //copiamos el book
          fs.copyFile(path.join(__dirname,'..','book.json'),"./" + directorio + "/book.json",function(err){
            if(err)
              console.log(err);
            console.log("Copiando contenido book.json...\n");
          });

          // //copiamos el gitignore
          // fs.copyFile(path.join(__dirname,'..','template_npm','.gitignore'),"./" + directorio + "/.gitignore",function(err){
          //   if(err)
          //   console.log(err);
          // });

          //renderizando package.json
          ejs.renderFile(path.join(__dirname,'..', 'template', 'package.ejs'), { autor: author , nombre: name, direcciongit: repo_url,direccionwiki: url_wiki},
            function(err,data){
              if(err) {
                  console.error(err);
              }
              if(data) {
                  fs.writeFile("./" + directorio + "/package.json", data);
              }
          });
console.log("SALGO");

}// final Estructura del directorio


// Recogida de argumentos
const argumentos = require('minimist')(process.argv.slice(2));


// Contemplamos las diferentes opciones

// HELP
if (argumentos.h || argumentos.help){
  console.log("\ngitbook-start [OPTIONS]\n"+
    "--directorio <nombre directorio>\n\n\n\n"+
"\tEjemplo de uso: gitbook-start --directorio DEMO\n");

}// final HELP
  else
  // Se pasa la opción de directorio
  if (argumentos.directorio || argumentos.d){
    console.log("Generando la estructura del directorio...\n");
    estructura(argumentos.directorio);
  }//final directorio
  else{
  console.log("NO HA INTRODUCIDO NINGUNA OPCION CONSULTE: gitbook-start --help");
};
