const mysql = require("../database/db");
const constants = require("../constants")



/**
  * Endpoint #1. getLogFotoresistencia
  * 
  * Este método realiza un select de todos los registros ubicados en
  * una tabla llamada "fotoresistencia".
  * 
  * Resultado: Obtendrá todos los registros de la tabla "Fotoresistencia" 
  * Todas las columnas están contempladas. 
  */
async function getLogFotoresistencia(req,res){
  try{

    var sql = constants.selectFotoresistencia;
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
  * Endpoint #2. getLogByDateBetweenFotoresistencia
  * 
  * Este método realiza un select de todos los registros ubicados en
  * una tabla llamada "fotoresistencia" que se encuentren entre dos fechas.
  * 
  * Resultado: Obtendrá todos los registros de la tabla "sensor_temperatura" 
  * Todas las columnas están contempladas. Se regresa solo los valores generados entre dos fechas
  * 
  * Puedes sustituirla utilizando una proyección a tu tabla incluyendo las columnas que necesites.
  */
async function getLogByDateBetweenFotoresistencia(req,res){
  try{
    var sql = constants.selectFotoresistenciaByDate;

    var date_one = req.body.date_one;
    var date_two = req.body.date_two;

    var conn = mysql.getConnection();
    conn.connect((error)=>{
        if (error) throw error;
        var params = [date_one,date_two];
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
  * Endpoint #3. insertLogFotoresistencia
  * 
  * Este método realiza un insert sobre la tabla "fotoresistencia".
  * Deberás enviar todos los datos desde tu sensor a este endpoint.
  * 
  * Sustituye:
  *    1. El nombre de tu tabla.
  *    2. Las columnas correspondientes a tu tabla en la Base de Datos.
  *    3. Realiza el insert
  */
async function insertLogFotoresistencia(req,res){
  try{

    var sql = constants.insertFotoresistencia;

    //el valor se recibe en el cuerpo de correo
    //cualquier dato que vaya a ir en el insert deberás guardarlo en una variable local
    var id_habitacion = req.body.id_habitacion;
    var led_encendido = req.body.led_encendido;

    var conn = mysql.getConnection();
    conn.connect((error)=>{
        if (error) throw error;

        // así mismo, cualquier dato que vaya a insertarse, deberá incluirse en
        // los valores de los parámetros del Insert
        var params = [id_habitacion, led_encendido]; 
        conn.execute(sql, params, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
            } else {
              console.log(data);
              res.json({
                status: 200,
                message: "Valor insertado",
                affectedRows: data.affectedRows,
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

module.exports = {insertLogFotoresistencia, getLogFotoresistencia,getLogByDateBetweenFotoresistencia};
