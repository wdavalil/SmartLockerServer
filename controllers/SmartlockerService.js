'use strict';

const fs = require('fs');
const db = require('../MySQL');

exports.getOrder = function(args, res, next) {
  /**
   * Gets the basic informations from an oreder
   *
   * orderID Integer The order identifier number
   * returns Order
   **/

   let query = 'SELECT id, combo_id, datestamp FROM orders WHERE id='+;

   res.setHeader('Content-Type', 'application/json');

   db.mysql_db.query(query, (err, rows, fields) => {
     if (err) {
       return res.end(JSON.stringify({
         status: 500,
         message: err}));
     }
     res.statusCode = 200;
     res.end(JSON.stringify(rows));
   });
}

exports.getHtml = function (req, res, next) {
  /**
   * Returns the landing page.
   *
   * no response value expected for this operation
   **/
   fs.readFile('web/index.html', 'utf8', (err, data) => {
     if (err) {
       return res.error({
         status: 500,
         message: 'File System Error',
         err: err
       });
     }
     // Replace Link Placeholder with rest of the url
     // this makes it possible to mantain querys
     data = data.replace(/{{link}}/g, req.url);
     res.statusCode = 200;
     res.end(data);
   });
}

exports.getComboArray = function(args, res, next) {
  /**
   * Gets an array of 'user' objects.
   *
   * size Integer Size of array to receive (optional)
   * offset Integer Start index of the source (optional)
   * returns List
   **/
   let query = 'SELECT id, name, price FROM combo';

   res.setHeader('Content-Type', 'application/json');

   db.mysql_db.query(query, (err, rows, fields) => {
     if (err) {
       return res.end(JSON.stringify({
         status: 500,
         message: err}));
     }
     res.statusCode = 200;
     res.end(JSON.stringify(rows));
   });
}


exports.getTimeSchedule = function(args, res, next) {
  /**
   * Gets an array of 'timeschedule' objects.
   *
   * returns List
   **/
  let query = 'SELECT * FROM schedule';

  res.setHeader('Content-Type', 'application/json');

  db.mysql_db.query(query, (err, rows, fields) => {
    if (err) {
      return res.end(JSON.stringify({
        status: 500,
        message: err}));
    }
      res.statusCode = 200;
      res.end(JSON.stringify(rows));
    });
}
