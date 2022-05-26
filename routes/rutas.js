var express = require('express');
var router = express.Router();
var database = require("../database/conexion.js");



router.get('/', function (req, res, next) {
    db = database.conectar();
    db.query("SELECT * FROM Emergencia;",
        function (err, rows, fields) {
            if (err) {
                console.log(err)
            } else {
                res.status(200);
                res.json(rows);
            }
        })
    //Terminar conexion
    db.end(function (err) { err ? console.log(err) : console.log('Conexión terminada.'); });
});

router.get('/Emergencia/:nombre', function (req, res, next) {
    var nombre = req.params.nombre;;

    db = database.conectar();
    db.query("SELECT * FROM Emergencia WHERE nombre = '" + nombre + "';",
        function (err, emergencia, fields) {
            if (err) {
                console.log(err)
            } else {
                console.log(emergencia[0].id_emergencia )
                db = database.conectar();
                db.query("SELECT * FROM tratamiento WHERE id_emergencia = " + emergencia[0].id_emergencia + ";",
                    function (err, tratamiento, fields) {
                        if (err) {
                            console.log(err)
                        } else {

                            

                            db = database.conectar();
                            db.query("SELECT * FROM recomendacion WHERE id_emergencia = " + emergencia[0].id_emergencia + ";",
                                function (err, recomendacion, fields) {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        db = database.conectar();
                                        db.query("SELECT * FROM imagen WHERE id_emergencia = " + emergencia[0].id_emergencia + ";",
                                            function (err, imagen, fields) {
                                                if (err) {
                                                    console.log(err)
                                                } else {
                                                    res.status(200);

                                                    res.json({emergencia: emergencia, tratamiento: tratamiento, recomendacion: recomendacion, imagen: imagen});
                                                }
                                            })
                                        //Terminar conexion
                                        db.end(function (err) { err ? console.log(err) : console.log('Conexión terminada.'); });

                                    }
                                })
                            //Terminar conexion
                            db.end(function (err) { err ? console.log(err) : console.log('Conexión terminada.'); });
                        }
                    })
                //Terminar conexion
                db.end(function (err) { err ? console.log(err) : console.log('Conexión terminada.'); });

            }
        })
    //Terminar conexion
    db.end(function (err) { err ? console.log(err) : console.log('Conexión terminada.'); });
});

// router.get('/Contacto', function (req, res, next) {
//     var nombre = req.params.nombre;;

//     db = database.conectar();
//     db.query("SELECT * FROM Emergencia WHERE nombre = '" + nombre + "'",
//         function (err, emergencia, fields) {
//             if (err) {
//                 console.log(err)
//             } else {

//                 db = database.conectar();
//                 db.query("SELECT * FROM  WHERE tratamiento = '" + emergencia[0].id_emergencia + "'",
//                     function (err, tratamiento, fields) {
//                         if (err) {
//                             console.log(err)
//                         } else {

                            

//                             db = database.conectar();
//                             db.query("SELECT * FROM  WHERE recomendacion = '" + emergencia[0].id_emergencia + "'",
//                                 function (err, recomendacion, fields) {
//                                     if (err) {
//                                         console.log(err)
//                                     } else {

//                                         res.status(200);
//                                         res.send(recomendacion);
//                                         db = database.conectar();
//                                         db.query("SELECT * FROM  WHERE imagen = '" + emergencia[0].id_emergencia + "'",
//                                             function (err, emergencia, fields) {
//                                                 if (err) {
//                                                     console.log(err)
//                                                 } else {
//                                                     res.status(200);

//                                                     res.json({emergencia: emergencia, tratamiento: tratamiento, recomendacion: recomendacion, imagen: imagen});
//                                                 }
//                                             })
//                                         //Terminar conexion
//                                         db.end(function (err) { err ? console.log(err) : console.log('Conexión terminada.'); });

//                                     }
//                                 })
//                             //Terminar conexion
//                             db.end(function (err) { err ? console.log(err) : console.log('Conexión terminada.'); });
//                         }
//                     })
//                 //Terminar conexion
//                 db.end(function (err) { err ? console.log(err) : console.log('Conexión terminada.'); });

//             }
//         })
//     //Terminar conexion
//     db.end(function (err) { err ? console.log(err) : console.log('Conexión terminada.'); });
// });

module.exports = router;






