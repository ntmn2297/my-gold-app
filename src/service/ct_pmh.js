
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  
  router.post('/ct_pmh', (req, res, next) => {
    db.query(
      'INSERT INTO ct_pmh (MASANPHAM, SOLUONG, DONGIAMUAVAO, THANHTIEN,SOPHIEUMUAHANG) VALUES (?,?,?,?,?)',
      [req.body.MASANPHAM, req.body.SOLUONG, req.body.DONGIAMUAVAO, req.body.THANHTIEN,req.body.SOPHIEUMUAHANG],
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

  router.get('/ct_pmh,', function (req, res, next) {
    db.query(
      'SELECT * FROM ct_pmh',
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

  router.get('/ct_pmh/:MA_CTPMH,', function (req, res, next) {
    db.query(
      'SELECT * FROM ct_pmh WHERE MA_CTPMH=?',
      [req.params.MA_CTPMH],
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

  
router.put('/ct_pmh/:MA_CTPMH', function (req, res, next) {
    db.query(
      'UPDATE ct_pmh SET MASANPHAM=?, SOLUONG=?, DONGIAMUAVAO=?, THANHTIEN=?, SOPHIEUMUAHANG=? WHERE MA_CTPMH=?',
      [req.body.MASANPHAM, req.body.SOLUONG, req.body.DONGIAMUAVAO, req.body.THANHTIEN, req.body.SOPHIEUMUAHANG, req.params.MA_CTPMH],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

router.delete('/ct_pmh/:MASANPHAM', function (req, res, next) {
  db.query(
    'DELETE FROM donvitinh WHERE MASANPHAM=?',
    [req.params.MASANPHAM],
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