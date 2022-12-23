require("./conexion")
require("./consulta")

const app = require("./app")
app.listen(app.get("port"));
console.log("Servidor ejecutandose en el puerto http://127.0.0.1:3015 ", app.get("port")) 

