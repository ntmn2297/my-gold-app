
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  
  router.post('/baocaotonkho', (req, res, next) => {
    db.query(
      'INSERT INTO baocaotonkho (THANG, NAM, MASANPHAM, MADONVITINH, TONDAU, TONCUOI, SOLUONGMUAVAO, SOLUONGBANRA) VALUES (?,?,?,?,?,?,?,?)',
      [req.body.THANG, req.body.NAM, req.body.MASANPHAM, req.body.MADONVITINH, req.body.TONDAU, req.body.TONCUOI, req.body.SOLUONGMUAVAO, req.body.SOLUONGBANRA],
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

  router.get('/baocaotonkho', function (req, res, next) {
    db.query(
      'SELECT * FROM baocaotonkho',
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

  router.get('/baocaotonkho/:MASANPHAM', function (req, res, next) {
    db.query(
      'SELECT * FROM baocaotonkho WHERE MASANPHAM=?',
      [req.params.MASANPHAM],
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

  router.get('/baocaotonkho/:MADONVITINH', function (req, res, next) {
    db.query(
      'SELECT * FROM baocaotonkho WHERE MADONVITINH=?',
      [req.params.MADONVITINH],
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

  
router.put('/baocaotonkho/:MABAOCAO', function (req, res, next) {
    db.query(
      'UPDATE baocaotonkho SET THANG=?, NAM=?, MASANPHAM=?, MADONVITINH=?, TONDAU=?, TONCUOI=?, SOLUONGMUAVAO=?, SOLUONGBANRA=? WHERE MABAOCAO=?',
      [req.body.THANG, req.body.NAM, req.body.MASANPHAM, req.body.MADONVITINH, req.body.TONDAU, req.body.TONCUOI, req.body.SOLUONGMUAVAO, req.body.SOLUONGBANRA, req.params.MABAOCAO],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

router.delete('/baocaotonkho/:MABAOCAO', function (req, res, next) {
  db.query(
    'DELETE FROM baocaotonkho WHERE MABAOCAO=?',
    [req.params.MABAOCAO],
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