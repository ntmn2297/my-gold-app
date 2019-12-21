
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  
  router.post('/ct_pdv', (req, res, next) => {
    db.query(
      'INSERT INTO ct_pdv (MALOAIDICHVU , DONGIADUOCTINH, THANHTIEN, SOLUONG, TRATRUOC, CONLAI, NGAYGIAO, TINHTRANG, SOPHIEUDICHVU) VALUES (?,?,?,?,?,?,?,?)',
      [req.body.MALOAIDICHVU, req.body.DONGIADUOCTINH, req.body.THANHTIEN, req.body.SOLUONG, req.body.TRATRUOC, req.body.CONLAI, req.body.NGAYGIAO, req.body.TINHTRANG, req.body.SOPHIEUDICHVU],
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

  router.get('/ct_pdv,', function (req, res, next) {
    db.query(
      'SELECT * FROM ct_pdv',
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

  router.get('/ct_pdv/:SOPHIEUDICHVU,', function (req, res, next) {
    db.query(
      'SELECT * FROM ct_pdv WHERE SOPHIEUDICHVU=?',
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

  router.get('/ct_pdv/:MALOAIDICHVU,', function (req, res, next) {
    db.query(
      'SELECT * FROM ct_pdv WHERE MALOAIDICHVU=?',
      [req.params.MALOAIDICHVU],
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
  
router.put('/ct_pdv/:MA_CTDV', function (req, res, next) {
    db.query(
      'UPDATE ct_pdv SET MALOAIDICHVU=?, DONGIADUOCTINH=?, THANHTIEN=?, SOLUONG=?, TRATRUOC=?, CONLAI=?, NGAYGIAO=?, TINHTRANG=?, SOPHIEUDICHVU=? WHERE MA_CTDV=?',
      [req.body.MALOAIDICHVU, req.body.DONGIADUOCTINH, req.body.THANHTIEN, req.body.SOLUONG, req.body.TRATRUOC, req.body.CONLAI, req.body.NGAYGIAO, req.body.TINHTRANG, req.body.SOPHIEUDICHVU, req.params.MA_CTDV],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });


router.delete('/ct_pdv/:SOPHIEUDICHVU', function (req, res, next) {
  db.query(
    'DELETE FROM ct_pdv WHERE SOPHIEUDICHVU=?',
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