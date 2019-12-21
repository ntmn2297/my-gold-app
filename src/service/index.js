
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const donvitinh = require('./donvitinh');
const loaisanpham = require('./loaisanpham');
const baocaotonkho = require('./baocaotonkho');
const ct_pbh = require('./ct_pbh');
const ct_pdv = require('./ct_pdv');
const ct_pmh = require('./ct_pmh');
const loaidichvu = require('./loaidichvu');
const nhacungcap = require('./nhacungcap');
const phieubanhang = require('./phieubanhang');
const phieudichvu = require('./phieudichvu');
const phieumuahang = require('./phieumuahang');
const sanpham = require('./sanpham');
const thamso = require('./thamso');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1132',
  database : 'qlchvangbac'
});
connection.connect();
const port = process.env.PORT || 8080;
const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(donvitinh(connection))
  .use(loaisanpham(connection))
  .use(baocaotonkho(connection))
  .use(ct_pbh(connection))
  .use(ct_pdv(connection))
  .use(ct_pmh(connection))
  .use(loaidichvu(connection))
  .use(nhacungcap(connection))
  .use(phieubanhang(connection))
  .use(phieudichvu(connection))
  .use(phieumuahang(connection))
  .use(sanpham(connection))
  .use(thamso(connection));
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});