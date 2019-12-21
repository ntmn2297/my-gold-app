
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  
  router.post('/phieumuahang', (req, res, next) => {
    db.query(
      'INSERT INTO phieumuahang (NGAYLAP, MANHACUNGCAP, TONGTIEN) VALUES (?,?,?)',
      [new Date(req.body.NGAYLAP), req.body.MANHACUNGCAP, req.body.TONGTIEN],
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

  router.get('/phieumuahang,', function (req, res, next) {
    db.query(
      'SELECT * FROM phieumuahang',
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

  router.get('/phieumuahang/:SOPHIEUMUAHANG,', function (req, res, next) {
    db.query(
      'SELECT * FROM phieumuahang WHERE SOPHIEUMUAHANG=?',
      [req.params.SOPHIEUMUAHANG],
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

  router.get('/phieumuahang/:MANHACUNGCAP,', function (req, res, next) {
    db.query(
      'SELECT * FROM phieumuahang WHERE MANHACUNGCAP=?',
      [req.params.MANHACUNGCAP],
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

  
router.put('/phieumuahang/:SOPHIEUMUAHANG', function (req, res, next) {
    db.query(
      'UPDATE phieumuahang SET NGAYLAP=?, MANHACUNGCAP=?, TONGTIEN=? WHERE SOPHIEUMUAHANG=?',
      [new Date(req.body.NGAYLAP), req.body.MANHACUNGCAP, req.body.TONGTIEN, req.params.SOPHIEUMUAHANG],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });


router.delete('/phieumuahang/:SOPHIEUMUAHANG', function (req, res, next) {
  db.query(
    'DELETE FROM phieumuahang WHERE SOPHIEUMUAHANG=?',
    [req.params.SOPHIEUMUAHANG],
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