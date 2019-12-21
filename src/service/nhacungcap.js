
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  
  router.post('/nhacungcap', (req, res, next) => {
    db.query(
      'INSERT INTO nhacungcap (TENNHACUNGCAP, DIACHI, SODIENTHOAI) VALUES (?,?,?)',
      [req.body.TENNHACUNGCAP, req.body.DIACHI, req.body.SODIENTHOAI],
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

  router.get('/nhacungcap', function (req, res, next) {
    db.query(
      'SELECT * FROM nhacungcap',
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

  
router.put('/nhacungcap/:MANHACUNGCAP', function (req, res, next) {
    db.query(
      'UPDATE nhacungcap SET TENNHACUNGCAP=?, DIACHI=?, SODIENTHOAI=? WHERE SODIENTHOAI=?',
      [req.body.TENNHACUNGCAP, req.body.DIACHI, req.body.SODIENTHOAI, req.params.MANHACUNGCAP],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

router.delete('/nhacungcap/:MANHACUNGCAP', function (req, res, next) {
  db.query(
    'DELETE FROM nhacungcap WHERE MAnhacungcap=?',
    [req.params.MAnhacungcap],
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