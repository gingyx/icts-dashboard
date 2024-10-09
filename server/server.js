const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const path = require('path');
const mysql = require('mysql')


let corsOptions = {
  origin: [ 'http://localhost:3000', 'http://localhost:4200' ]
};

app.use(express.static(path.join(__dirname, '../dist/icts-dashboard/browser')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/icts-dashboard/browser/index.html'));
// });

// app.get('/', (req, res) => {
//   res.send('Hello World from Node.js server!');
// });

app.get('/api/doc-records/:details/:gjahr/:bukrs/:belnr1/:belnr2', cors(corsOptions), (req, res) => {
  let query = `
    SELECT BELNR FROM bkpf
    WHERE GJAHR = ${req.params.gjahr}
    AND BUKRS = ${req.params.bukrs} AND BELNR BETWEEN ${req.params.belnr1} AND ${req.params.belnr2}`
  if (req.params.details == "true") {
    query = `
      SELECT * FROM bkpf JOIN bseg ON bkpf.BUKRS = bseg.BUKRS AND bkpf.BELNR = bseg.BELNR AND bkpf.GJAHR = bseg.GJAHR 
      WHERE bkpf.GJAHR = ${req.params.gjahr}
      AND bkpf.BUKRS = ${req.params.bukrs} AND bkpf.BELNR BETWEEN ${req.params.belnr1} AND ${req.params.belnr2}`
  }
  console.log(query);
  connection.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Database query failed');
    } else {
      res.json(results);
    }
  });
});

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'doc_records'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
