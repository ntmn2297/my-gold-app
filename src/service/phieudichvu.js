
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  
  router.post('/phieudichvu', (req, res, next) => {
    db.query(
      'INSERT INTO phieudichvu (NGAYLAP, TENKHACHHANG, SODIENTHOAI, TONGTIEN, TONGTRATRUOC, TONGCONLAI, MA_CTDV) VALUES (?,?,?,?,?,?,?)',
      [new Date(req.body.NGAYLAP), req.body.TENKHACHHANG, req.body.SODIENTHOAI, req.body.TONGTIEN, req.body.TONGTRATRUOC, req.body.TONGCONLAI, req.body.MA_CTDV],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/phieudichvu,', function (req, res, next) {
    db.query(
      'SELECT * FROM phieudichvu',
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.get('/phieudichvu/:SOPHIEUDICHVU,', function (req, res, next) {
    db.query(
      'SELECT * FROM phieudichvu WHERE SOPHIEUDICHVU=?',
      [req.params.SOPHIEUDICHVU],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.get('/phieudichvu/:MA_CTDV,', function (req, res, next) {
    db.query(
      'SELECT * FROM phieudichvu WHERE MA_CTDV=?',
      [req.params.MA_CTDV],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  
router.put('/phieudichvu/:SOPHIEUDICHVU', function (req, res, next) {
    db.query(
      'UPDATE phieudichvu SET NGAYLAP=?, TENKHACHHANG=?, SODIENTHOAI=?, TONGTIEN=?, TONGTRATRUOC=?, TONGCONLAI=?, MA_CTDV=? WHERE SOPHIEUMUAHANG=?',
      [new Date(req.body.NGAYLAP), req.body.TENKHACHHANG, req.body.SODIENTHOAI, req.body.TONGTIEN, req.body.TONGTRATRUOC, req.body.TONGCONLAI, req.body.MA_CTDV, req.params.SOPHIEUDICHVU],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });


router.delete('/phieudichvu/:SOPHIEUDICHVU', function (req, res, next) {
  db.query(
    'DELETE FROM phieudichvu WHERE SOPHIEUDICHVU=?',
    [req.params.SOPHIEUDICHVU],
    (error) => {
      if (error) {
        res.status(500).json({status: 'error'});
      } else {
        res.status(200).json({status: 'ok'});
      }
    }
  );
});

  return router;
}
module.exports = createRouter;