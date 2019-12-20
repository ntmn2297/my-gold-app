
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  const owner = '';
  
  router.post('/donvitinh', (req, res, next) => {
    db.query(
      'INSERT INTO donvitinh (TENDONVITINH) VALUES (?)',
      [req.body.TENDONVITINH],
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

  router.get('/donvitinh', function (req, res, next) {
    db.query(
      'SELECT * FROM donvitinh',
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

  
router.put('/donvitinh/:MADONVITINH', function (req, res, next) {
    db.query(
      'UPDATE donvitinh SET TENDONVITINH=? WHERE MADONVITINH=?',
      [req.body.TENDONVITINH, req.params.MADONVITINH],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

router.delete('/donvitinh/:MADONVITINH', function (req, res, next) {
  db.query(
    'DELETE FROM donvitinh WHERE MADONVITINH=?',
    [req.params.MADONVITINH],
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