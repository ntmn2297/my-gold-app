
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  
  router.post('/sanpham', (req, res, next) => {
    db.query(
      'INSERT INTO sanpham (TENSANPHAM, MALOAISANPHAM, DONGIAMUAVAO, SOLUONGTON,DONGIABANRA) VALUES (?,?,?,?,?)',
      [req.body.TENDSANPHAM, req.body.MALOAISANPHAM, req.body.DONGIAMUAVAO, req.body.SOLUONGTON,req.body.DONGIABANRA],
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

  router.get('/sanpham,', function (req, res, next) {
    db.query(
      'SELECT * FROM sanpham',
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

  router.get('/sanpham/:MALOAISANPHAM,', function (req, res, next) {
    db.query(
      'SELECT * FROM sanpham WHERE MALOAISANPHAM=?',
      [req.params.MALOAISANPHAM],
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

  
router.put('/sanpham/:MASANPHAM', function (req, res, next) {
    db.query(
      'UPDATE sanpham SET TENSANPHAM=?, MALOAISANPHAM=?, DONGIAMUAVAO=?, SOLUONGTON=?, DONGIABANRA=? WHERE MASANPHAM=?',
      [req.body.TENSANPHAM, req.body.MALOAISANPHAM, req.body.DONGIAMUAVAO, req.body.SOLUONGTON, req.body.DONGIABANRA, req.params.MASANPHAM],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

router.delete('/sanpham/:MASANPHAM', function (req, res, next) {
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