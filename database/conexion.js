const mysql = require('mysql');

function conectar() {
    var config =
    {
        host: 'servicioscloudbd.mysql.database.azure.com',
        user: 'SCAdmin',
        password: 'Administrador123456',
        database: 'quickstartdb',
        port: 3306,
    };
    const db = new mysql.createConnection(config);
    db.connect(
        function (err) {
            if (err) {
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Conexion establecida a la base de datos.");
            }
        });
    return db;
};

module.exports = {
    "conectar": conectar,
}