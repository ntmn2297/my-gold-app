
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  
  router.post('/loaisanpham', (req, res, next) => {
    db.query(
      'INSERT INTO loaisanpham (TENLOAISANPHAM, PHANTRAMLOINHUAN, MADONVITINH) VALUES (?,?,?)',
      [req.body.TENLOAISANPHAM, req.body.PHANTRAMLOINHUAN, req.body.MADONVITINH],
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

  router.get('/loaisanpham', function (req, res, next) {
    db.query(
      'SELECT * FROM loaisanpham',
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

  
router.put('/loaisanpham/:MALOAISANPHAM', function (req, res, next) {
    db.query(
      'UPDATE loaisanpham SET TENLOAISANPHAM=?, PHANTRAMLOINHUAN=?, MADONVITINH=? WHERE MALOAISANPHAM=?',
      [req.body.TENLOAISANPHAM, req.body.PHANTRAMLOINHUAN, req.body.MADONVITINH, req.params.MALOAISANPHAM],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

router.delete('/loaisanpham/:MALOAISANPHAM', function (req, res, next) {
  db.query(
    'DELETE FROM loaisanpham WHERE MALOAISANPHAM=?',
    [req.params.MALOAISANPHAM],
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