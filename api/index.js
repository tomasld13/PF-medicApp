const {conn} = require('./src/db') ;
const {socketServer, configurarSockets} = require("./src/app");
const getRoles = require("./src/creadores/roles.js")
const getGeneros = require("./src/creadores/generos.js")
const getMetodos = require("./src/creadores/metodosDePago.js")
const getModalidades = require("./src/creadores/modalidad.js");
const getEspecialidades = require('./src/creadores/especialidades');
const getProvincias = require("./src/creadores/provincias")
const getCiudades = require("./src/creadores/ciudades")
const getServicios = require("./src/creadores/servicios")
const {generePacientes, generePsicologos, generarAdmin} = require("./src/creadores/usuarios")
require('dotenv').config();





conn.sync({force: true, logging: false}).then(async () => {
  console.log('Base de datos conectada! :D');
  socketServer.listen(process.env.PORT, async function () {
    getRoles();
    getGeneros();
    getMetodos();
    getModalidades();
    getEspecialidades();
    await getProvincias();
    await getCiudades();
    await getServicios();
    generePacientes();
    generePsicologos();
    await generarAdmin();
    console.log(`App is listening on port ${process.env.PORT}!`);
    configurarSockets();
  });

  
})
.catch((err) => console.error(err));
