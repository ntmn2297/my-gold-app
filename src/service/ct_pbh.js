
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  
  router.post('/ct_pbh', (req, res, next) => {
    db.query(
      'INSERT INTO ct_pbh (MASANPHAM, SOLUONG, DONGIABANRA, THANHTIEN, SOPHIEUBANHANG) VALUES (?,?,?,?,?)',
      [req.body.MASANPHAM, req.body.SOLUONG, req.body.DONGIABANRA, req.body.THANHTIEN, req.body.SOPHIEUBANHANG],
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

  router.get('/ct_pbh,', function (req, res, next) {
    db.query(
      'SELECT * FROM ct_pbh',
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

  router.get('/ct_pbh/:SOPHIEUBANHANG,', function (req, res, next) {
    db.query(
      'SELECT * FROM ct_pbh WHERE SOPHIEUBANHANG=?',
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

  router.get('/ct_pbh/:MA_CTPBH,', function (req, res, next) {
    db.query(
      'SELECT * FROM ct_pbh WHERE MA_CTPBH=?',
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

  
router.put('/ct_pbh/:MA_CTPBH', function (req, res, next) {
    db.query(
      'UPDATE ct_pbh SET MASANPHAM=?, SOLUONG=?, DONGIABANRA=?, THANHTIEN=?, SOPHIEUBANHANG=? WHERE MA_CTPBH=?',
      [req.body.MASANPHAM, req.body.SOLUONG, req.body.DONGIABANRA, req.body.THANHTIEN, req.body.SOPHIEUBANHANG, req.params.MA_CTPBH],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });


router.delete('/ct_pbh/:MA_CTPBH', function (req, res, next) {
  db.query(
    'DELETE FROM ct_pbh WHERE MA_CTPBH=?',
    [req.params.MA_CTPBH],
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