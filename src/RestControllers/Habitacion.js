const mysql = require("../database/db");
const constants = require("../constants")



/**
  * Endpoint #1. getLogHabitacion
  * 
  * Este método realiza un select de todas las habitaciones registrados ubicados en
  * la tabla llamada "habitacion".
  * 
  * Resultado: Obtendrá los registros de la tabla "habitacion" 
  * Todas las columnas están contempladas. 
  * 
  * Puedes sustituirla utilizando una proyección a tu tabla incluyendo las columnas que necesites.
  * 
  * Te servirá para crear reportes especializados si utilizas algún metodo de despliegue web para los
  * Dashboards.
  */
async function getLogHabitacion(req,res){
  try{

    var sql = constants.selectHabitaciones;
    var conn = mysql.getConnection();
    conn.connect((error)=>{
        if (error) throw error;
        conn.query(sql, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
            } else {
              console.log(data);
              res.json({
                data,
              });
            }
            conn.end();
        });
    });
  }catch(error){
    console.log(error)
    res.status(500)
    res.send(error)
  }
}


/**
  * Endpoint #2. getLogByIdPaciente
  * 
  * Este método realiza un select de todos los registros ubicados en
  * una tabla llamada "paciente" que se encuentren entre dos ids.
  * 
  * Resultado: Obtendrá todos los registros de la tabla "paciente" que se encuentren entre las dos ids.
  * Todas las columnas están contempladas. Se regresa solo los valores generados entre dos ids
  * 
  * Puedes sustituirla utilizando una proyección a tu tabla incluyendo las columnas que necesites.
  * 
  * Te servirá para crear reportes especializados si utilizas algún metodo de despliegue web para los
  * Dashboards.
  */
async function getLogByIdHabitacion(req,res){
  try{
    var sql = constants.selectHabitacionesById;

    var id_one = req.body.id_one;
    var id_two = req.body.id_two;

    var conn = mysql.getConnection();
    conn.connect((error)=>{
        if (error) throw error;
        var params = [id_one,id_two];
        conn.execute(sql, params, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
            } else {
              console.log(data);
              res.json({
                data,
              });
            }
            conn.end();
        });
    });
  }catch(error){
    console.log(error)
    res.status(500)
    res.send(error)
  }
  
}

/**
  * Endpoint #3. insertLogHabitacion
  * Este método realiza un insert sobre la tabla "habitacion".
  */
async function insertLogHabitacion(req, res) {
  try {
    const sqlInsert = constants.insertHabitaciones; // Consulta para insertar
    const sqlCheck = constants.CheckHabitacion; // Consulta para verificar existencia

    const id_habitacion = req.body.id_habitacion;
    const id_paciente = req.body.id_paciente;

    const conn = mysql.getConnection();

    conn.connect((error) => {
      if (error) {
        res.status(500);
        res.send("Error al conectar con la base de datos.");
        return;
      }

      // Verifica si la habitación o el paciente ya están asignados
      const checkParams = [id_habitacion, id_paciente];
      conn.execute(sqlCheck, checkParams, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          conn.end(); // Asegura cerrar la conexión
          return;
        }

        if (data.length > 0) {
          // Si ya hay un conflicto, no se realiza el insert
          res.status(400);
          res.json({
            status: 400,
            message:
              "La habitación ya tiene un paciente asignado o el paciente ya está asignado a otra habitación.",
          });
          conn.end(); // Asegura cerrar la conexión
          return;
        } else {
          // Si no hay conflicto, realiza el insert
          const insertParams = [id_habitacion, id_paciente];
          conn.execute(sqlInsert, insertParams, (error, data) => {
            if (error) {
              res.status(500);
              res.send(error.message);
            } else {
              res.json({
                status: 200,
                message: "Valor insertado",
                affectedRows: data.affectedRows,
              });
            }
            conn.end(); // Asegura cerrar la conexión después del insert
          });
        }
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {insertLogHabitacion, getLogHabitacion,getLogByIdHabitacion};