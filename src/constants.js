
/*
 * LOCAL DATABASE Config
 * 
 *  Para acceder a una BD en la nube debes configurar un archivo .env
 */
/*const dbHost;
const dbPort;
const dbUser;
const dbPass;
const dbName*/

// Configuración general del servidor
const serverPort = 3000
const contextURL = '/iot'; 
const api = '/api'; 

// Tabla central de pacientes
const getPacientes = '/getPacientes'
const getPacientesById = '/getPacientes'
const postPacientes = '/insertPacientes';

// Pacientes DB Queries
const selectPacientes = 'SELECT * FROM pacientes';
const selectPacientesById = 'SELECT * FROM pacientes WHERE id_paciente between ? and ?';
const insertPacientes = 'INSERT INTO pacientes (nombre, edad) values (?, ?)';

// Entidad de habitaciones
const getHabitacion = '/getHabitaciones'
const getHabitacionById = '/getHabitaciones'
const postHabitacion = '/insertHabitaciones';

// Habitaciones DB Queries
const selectHabitaciones = 'SELECT * FROM habitacion';
const selectHabitacionesById = 'SELECT * FROM habitacion WHERE id_habitacion between ? and ?';
const insertHabitaciones = 'INSERT INTO habitacion (id_habitacion, id_paciente) values (?, ?)';
const CheckHabitacion = 'SELECT * FROM habitacion WHERE id_habitacion = ? OR id_paciente = ?';

// Entidad andador
const getAndador = '/getAndador'
const getAndadorById = '/getAndador'
const postAndador = '/insertAndador';

// Habitaciones DB Queries
const selectAndador = 'SELECT * FROM andador';
const selectandadorById = 'SELECT * FROM andador WHERE id_andador between ? and ?';
const insertAndador = 'INSERT INTO andador (id_andador, id_paciente) values (?, ?)';
const CheckAndador = 'SELECT * FROM andador WHERE id_andador = ? OR id_paciente = ?';

// SENSOR 1 URLS. Temperatura
const getTemperatureSensor = '/getTemperatures'
const getTemperatureSensorByDate = '/getTemperatures'
const postTemperatureSensor = '/insertTemperature';

// Temperaturas DB Queries
const selectTemperature = 'SELECT * FROM sensor_temperatura ORDER BY id_temperatura DESC LIMIT 10';
const selectTemperatureByDate = 'SELECT * FROM sensor_temperatura WHERE fecha between ? and ?';
const insertTemperature = 'INSERT INTO sensor_temperatura (id_habitacion,temperatura_celsius) values (?, ?)';

// SENSOR 2 URLS. Ultrasonico Fijo
const getUltrasonicoFijo = '/getDistanciasFijo'
const getUltrasonicoFijoByDate = '/getDistanciasFijo'
const postUltrasonicoFijo = '/insertDistanciasFijo';

// Ultrasonico Fijo DB Queries 
const selectDistanciasFijo = 'SELECT * FROM sensor_ultrasonico_fijo ORDER BY id_distancia_fija DESC LIMIT 10';
const selectDistanciasFijoByDate = 'SELECT * FROM sensor_ultrasonico_fijo WHERE fecha between ? and ?';
const insertDistanciasFijo = 'INSERT INTO sensor_ultrasonico_fijo (id_habitacion,distancia_fija_cm) values (?, ?)';

//SENSOR 3 URLS. Acelerometro
const getAcelerometro = '/getAcelerometro'
const getAcelerometroByDate = '/getAcelerometro'
const postAcelerometro = '/insertAcelerometro';

// DB Queries Acelerometro
const selectAcelerometro = 'SELECT * FROM acelerometro ORDER BY id_aceleracion DESC LIMIT 5';
const selectAcelerometroByDate = 'SELECT * FROM acelerometro WHERE fecha between ? and ?';
const insertAcelerometro = 'INSERT INTO acelerometro (id_andador,aceleracion_g) values (?, ?)';

// SENSOR 4 URLS. Fotoresistencia
const getFotoresistencia = '/getFotoresistencia'
const getFotoresistenciaByDate = '/getFotoresistencia'
const postFotoresistencia = '/insertFotoresistencia'; 

// Fotoresistencia DB Queries
const selectFotoresistencia = 'SELECT * FROM fotoresistencia ORDER BY id_fotoresistencia DESC LIMIT 1';
const selectFotoresistenciaByDate = 'SELECT * FROM fotoresistencia WHERE fecha between ? and ?';
const insertFotoresistencia = 'INSERT INTO fotoresistencia (id_habitacion,led_encendido) values (?, ?)';

// Sensor 5 URLS. Movimiento
const getMovimiento = '/getMovimiento'
const getMovimientoByDate = '/getMovimiento'
const postMovimiento = '/insertMovimiento';

// DB Queries Movimiento
const selectMovimiento = 'SELECT * FROM sensor_movimiento ORDER BY id_movimiento DESC LIMIT 1';
const selectMovimientoByDate = 'SELECT * FROM sensor_movimiento WHERE fecha between ? and ?';
const insertMovimiento = 'INSERT INTO sensor_movimiento (id_habitacion,movimiento_detectado) values (?, ?)';

// Sensor 6 URLS. Ultrasonico Andador
const getUltrasonicoAndador = '/getDistanciasAndador'
const getUltrasonicoAndadorByDate = '/getDistanciasAndador'
const postUltrasonicoAndador = '/insertDistanciasAndador';

// DB Queries Movimiento
const selectDistanciasAndador = 'SELECT * FROM sensor_ultrasonico_andador ORDER BY id_distancia_andador DESC LIMIT 10';
const selectDistanciasAndadorByDate = 'SELECT * FROM sensor_ultrasonico_andador WHERE fecha between ? and ?';
const insertDistanciasAndador = 'INSERT INTO sensor_ultrasonico_andador (id_andador, distancia_andador_cm) values (?, ?)';

module.exports= {
   dbHost,dbPort,dbUser,dbPass,dbName,serverPort, contextURL,api, getPacientes, getPacientesById, postPacientes, 
   selectPacientes, selectPacientesById, insertPacientes, getTemperatureSensor, getTemperatureSensorByDate,
   postTemperatureSensor,selectTemperature,selectTemperatureByDate,insertTemperature, getUltrasonicoFijo,
   getUltrasonicoFijoByDate,postUltrasonicoFijo,selectDistanciasFijo,selectDistanciasFijoByDate, insertDistanciasFijo, 
   getAcelerometro, getAcelerometroByDate, postAcelerometro, selectAcelerometro, selectAcelerometroByDate, insertAcelerometro, 
   getFotoresistencia, getFotoresistenciaByDate, postFotoresistencia, selectFotoresistencia, selectFotoresistenciaByDate, insertFotoresistencia, 
   getMovimiento, getMovimientoByDate, postMovimiento, selectMovimiento, selectMovimientoByDate, insertMovimiento, 
   getUltrasonicoAndador, getUltrasonicoAndadorByDate, postUltrasonicoAndador, selectDistanciasAndador, 
   selectDistanciasAndadorByDate, insertDistanciasAndador, getHabitacion, getHabitacionById, postHabitacion, selectHabitaciones,
   selectHabitacionesById, insertHabitaciones, CheckHabitacion, getAndador, getAndadorById, postAndador, selectAndador, selectandadorById,
   insertAndador, CheckAndador
}