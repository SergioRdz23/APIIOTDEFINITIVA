const mysql = require("../database/db");
const constants = require("../constants")



/**
  * Endpoint #1. getLogPacientes
  * 
  * Este método realiza un select de todos los pacientes registrados ubicados en
  * la tabla llamada "paciente".
  * 
  * Resultado: Obtendrá los registros de la tabla "paciente" 
  * Todas las columnas están contempladas. 
  * 
  * Puedes sustituirla utilizando una proyección a tu tabla incluyendo las columnas que necesites.
  * 
  * Te servirá para crear reportes especializados si utilizas algún metodo de despliegue web para los
  * Dashboards.
  */
async function getLogPacientes(req,res){
  try{

    var sql = constants.selectPacientes;
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
async function getLogByIdPacientes(req,res){
  try{
    var sql = constants.selectPacientesById;

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
  * Endpoint #3. insertLogAcelerometro
  * Este método realiza un insert sobre la tabla "acelerometro".
  */
async function insertLogPacientes(req,res){
  try{

    var sql = constants.insertPacientes;

    //el valor se recibe en el cuerpo de correo
    //cualquier dato que vaya a ir en el insert deberás guardarlo en una variable local
    var nombre = req.body.nombre;
    var edad = req.body.edad;
    var id_habitacion = req.body.id_habitacion;
    var id_andador = req.body.id_andador;

    var conn = mysql.getConnection();
    conn.connect((error)=>{
        if (error) throw error;

        // así mismo, cualquier dato que vaya a insertarse, deberá incluirse en
        // los valores de los parámetros del Insert
        var params = [nombre, edad, id_habitacion, id_andador]; 
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

module.exports = {insertLogPacientes, getLogPacientes,getLogByIdPacientes};
