// Para cada sensor se crea un archivo con los controladores
// Se registra en el router todos los métodos disponibles en cada controlador con una URL que haga mencion a dicha acción
const constants = require("./constants")
const express = require('express');
const pacientesController = require('./RestControllers/Pacientes.js');
const habitacionController = require('./RestControllers/Habitacion.js');
const andadorController = require('./RestControllers/Andador.js');
const temperaturaController = require('./RestControllers/sensorTemperatura.js'); 
const ultrasonicofijoController = require('./RestControllers/sensorUltrasonicoFijo.js');
const acelerometroController = require('./RestControllers/Acelerometro.js'); 
const fotoresistenciaController = require('./RestControllers/Fotoresistencia.js'); 
const movimientoController = require('./RestControllers/sensorMovimiento.js'); 
const ultrasonicoandadorController = require('./RestControllers/sensorUltrasonicoAndador.js');
const router = express.Router();

router.get("/",function(req,res){
    res.send('<html><head><title>API IoT</title></head><body><h1>Messi hijo de Cristiano</h1></body></html>');
});

/**
 * URL's que incluyen tus endpoints que reciben peticiones para cada 
 * sensor.
 * 
 * Hay 3 métodos actualmente, 1 get HTTP y 2 post HTTP. En todos, el primer argumento es una url (creada de manera parametrizada con constantes)
 * El segundo método es la función js que responderá a las peticiones de dicha URL. Estas están en el archivo sensorTemperatura.js
 * 
 * Para otros sensores, puedes agregar otros archivos y configurar sus url's.
 * 
 */

// Tabla de pacientes
router.get(constants.contextURL + constants.api + constants.getPacientes, pacientesController.getLogPacientes);
router.post(constants.contextURL + constants.api + constants.getPacientesById, pacientesController.getLogByIdPacientes);
router.post(constants.contextURL + constants.api + constants.postPacientes,pacientesController.insertLogPacientes);

// Entidad habitaciones
router.get(constants.contextURL + constants.api + constants.getHabitacion, habitacionController.getLogHabitacion);
router.post(constants.contextURL + constants.api + constants.getHabitacionById, habitacionController.getLogByIdHabitacion);
router.post(constants.contextURL + constants.api + constants.postHabitacion,habitacionController.insertLogHabitacion);

// Entidad andador
router.get(constants.contextURL + constants.api + constants.getAndador, andadorController.getLogAndador);
router.post(constants.contextURL + constants.api + constants.getAndadorById, andadorController.getLogByIdAndador);
router.post(constants.contextURL + constants.api + constants.postAndador, andadorController.insertLogAndador);

// Sensor de temperatura
router.get(constants.contextURL + constants.api + constants.getTemperatureSensor, temperaturaController.getLogTemperatura);
router.post(constants.contextURL + constants.api + constants.getTemperatureSensorByDate, temperaturaController.getLogByDateBetweenTemperatura);
router.post(constants.contextURL + constants.api + constants.postTemperatureSensor,temperaturaController.insertLogTemperatura);

// Sensor ultrasonico fijo
router.get(constants.contextURL + constants.api + constants.getUltrasonicoFijo, ultrasonicofijoController.getLogUltrasonicoFijo);
router.post(constants.contextURL + constants.api + constants.getUltrasonicoFijoByDate, ultrasonicofijoController.getLogByDateBetweenUltrasonicoFijo);
router.post(constants.contextURL + constants.api + constants.postUltrasonicoFijo,ultrasonicofijoController.insertLogUltrasonicoFijo);

// Acelerometro
router.get(constants.contextURL + constants.api + constants.getAcelerometro, acelerometroController.getLogAcelerometro);
router.post(constants.contextURL + constants.api + constants.getAcelerometroByDate, acelerometroController.getLogByDateBetweenAcelerometro);
router.post(constants.contextURL + constants.api + constants.postAcelerometro, acelerometroController.insertLogAcelerometro);

// Fotoresistencia
router.get(constants.contextURL + constants.api + constants.getFotoresistencia, fotoresistenciaController.getLogFotoresistencia);
router.post(constants.contextURL + constants.api + constants.getFotoresistenciaByDate, fotoresistenciaController.getLogByDateBetweenFotoresistencia);
router.post(constants.contextURL + constants.api + constants.postFotoresistencia, fotoresistenciaController.insertLogFotoresistencia);

// Sensor de movimiento
router.get(constants.contextURL + constants.api + constants.getMovimiento, movimientoController.getLogMovimiento);
router.post(constants.contextURL + constants.api + constants.getMovimientoByDate, movimientoController.getLogByDateBetweenMovimiento);
router.post(constants.contextURL + constants.api + constants.postMovimiento, movimientoController.insertLogMovimiento);

// Sensor ultrasonico andador
router.get(constants.contextURL + constants.api + constants.getUltrasonicoAndador, ultrasonicoandadorController.getLogUltrasonicoAndador);
router.post(constants.contextURL + constants.api + constants.getUltrasonicoAndadorByDate, ultrasonicoandadorController.getLogByDateBetweenUltrasonicoAndador);
router.post(constants.contextURL + constants.api + constants.postUltrasonicoAndador,ultrasonicoandadorController.insertLogUltrasonicoAndador);

// Le decimos a Node que queremos hacer uso de nuestro router en otros archivos (como por ejemplo, app.js)
module.exports = router;