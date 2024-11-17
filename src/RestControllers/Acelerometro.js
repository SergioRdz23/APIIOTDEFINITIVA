const mysql = require("../database/db");
const constants = require("../constants")



/**
  * Endpoint #1. getLogAcelerometro
  * 
  * Este método realiza un select de los últimos 5 registros ubicados en
  * la tabla llamada "acelerometro".
  * 
  * Resultado: Obtendrá los últimos 5 registros de la tabla "acelerometro" 
  * Todas las columnas están contempladas. 
  * 
  * Puedes sustituirla utilizando una proyección a tu tabla incluyendo las columnas que necesites.
  * 
  * Te servirá para crear reportes especializados si utilizas algún metodo de despliegue web para los
  * Dashboards.
  */
 
async function getLogAcelerometro(req,res){
  try{

    var sql = constants.selectAcelerometro;
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
  * Endpoint #2. getLogByDateBetweenAcelerometro
  * 
  * Este método realiza un select de todos los registros ubicados en
  * una tabla llamada "acelerometro" que se encuentren entre dos fechas.
  * 
  * Resultado: Obtendrá todos los registros de la tabla "acelerometro" 
  * Todas las columnas están contempladas. Se regresa solo los valores generados entre dos fechas
  * 
  * Puedes sustituirla utilizando una proyección a tu tabla incluyendo las columnas que necesites.
  * 
  * Te servirá para crear reportes especializados si utilizas algún metodo de despliegue web para los
  * Dashboards.
  */
async function getLogByDateBetweenAcelerometro(req,res){
  try{
    var sql = constants.selectAcelerometroByDate;

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
  * Endpoint #3. insertLogAcelerometro
  * Este método realiza un insert sobre la tabla "acelerometro".
  */
async function insertLogAcelerometro(req,res){
  try{

    var sql = constants.insertAcelerometro;

    //el valor se recibe en el cuerpo de correo
    //cualquier dato que vaya a ir en el insert deberás guardarlo en una variable local
    var id_andador = req.body.id_andador;
    var aceleracion_g = req.body.aceleracion_g;

    var conn = mysql.getConnection();
    conn.connect((error)=>{
        if (error) throw error;

        // así mismo, cualquier dato que vaya a insertarse, deberá incluirse en
        // los valores de los parámetros del Insert
        var params = [id_andador, aceleracion_g]; 
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

module.exports = {insertLogAcelerometro, getLogAcelerometro,getLogByDateBetweenAcelerometro};
