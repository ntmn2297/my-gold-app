
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  
  router.post('/phieubanhang', (req, res, next) => {
    db.query(
      'INSERT INTO phieubanhang (NGAYLAP, KHACHHANG, TONGTIEN, MA_CTPBH) VALUES (?,?,?,?)',
      [new Date(req.body.NGAYLAP), req.body.KHACHHANG, req.body.TONGTIEN, req.body.MA_CTPBH],
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

  router.get('/phieubanhang,', function (req, res, next) {
    db.query(
      'SELECT * FROM phieubanhang',
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

  router.get('/phieubanhang/:SOPHIEUBANHANG,', function (req, res, next) {
    db.query(
      'SELECT * FROM phieubanhang WHERE SOPHIEUBANHANG=?',
      [req.params.SOPHIEUBANHANG],
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

  router.get('/phieubanhang/:MA_CTPBH,', function (req, res, next) {
    db.query(
      'SELECT * FROM phieubanhang WHERE MA_CTPBH=?',
      [req.params.MA_CTPBH],
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

  
router.put('/phieubanhang/:SOPHIEUBANHANG', function (req, res, next) {
    db.query(
      'UPDATE phieubanhang SET NGAYLAP=?, KHACHHANG=?, TONGTIEN=?, MA_CTPBH=? WHERE SOPHIEUBANHANG=?',
      [new Date(req.body.NGAYLAP), req.body.KHACHHANG, req.body.TONGTIEN, req.body.MA_CTPBH, req.params.SOPHIEUBANHANG],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });


router.delete('/phieubanhang/:SOPHIEUBANHANG', function (req, res, next) {
  db.query(
    'DELETE FROM phieubanhang WHERE SOPHIEUBANHANG=?',
    [req.params.SOPHIEUBANHANG],
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