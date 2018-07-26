const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const addUser = function(username, password, age, skinTone, undertone, skinType, skinSens, climate, enviroment, skinConcerns, callback) {
  let query = 'INSERT INTO user (username, password, age, skin_tone, undertone, skin_type, skin_sens, climate, enviroment, skin_concerns) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(query, [username, password, age, skinTone, undertone, skinType, skinSens, climate, enviroment, skinConcerns], (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(res);
    }
  });
};






module.exports = {
  addUser
};
