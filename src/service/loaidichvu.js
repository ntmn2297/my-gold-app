
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  
  router.post('/loaidichvu', (req, res, next) => {
    db.query(
      'INSERT INTO loaidichvu (TENLOAIDICHVU, DONGIA, CHIPHIRIENG) VALUES (?,?,?)',
      [req.body.TENLOAIDICHVU, req.body.DONGIA, req.body.CHIPHIRIENG],
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

  router.get('/loaidichvu', function (req, res, next) {
    db.query(
      'SELECT * FROM loaidichvu',
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

  
router.put('/loaidichvu/:MALOAIDICHVU', function (req, res, next) {
    db.query(
      'UPDATE loaidichvu SET TENLOAIDICHVU=?, DONGIA=?, CHIPHIRIENG=? WHERE MALOAIDICHVU=?',
      [req.body.TENLOAIDICHVU, req.body.DONGIA, req.body.CHIPHIRIENG, req.params.MALOAIDICHVU],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

router.delete('/loaidichvu/:MALOAIDICHVU', function (req, res, next) {
  db.query(
    'DELETE FROM loaidichvu WHERE MALOAIDICHVU=?',
    [req.params.MALOAIDICHVU],
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