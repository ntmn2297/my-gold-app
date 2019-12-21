
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  
  router.post('/thamso', (req, res, next) => {
    db.query(
      'INSERT INTO thamso (TENTHAMSO, GIATRI) VALUES (?, ?)',
      [TENTHAMSO, req.body.GIATRI],
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

  router.get('/thamso', function (req, res, next) {
    db.query(
      'SELECT * FROM thamso',
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

  
router.put('/thamso/:TENTHAMSO', function (req, res, next) {
    db.query(
      'UPDATE thamso SET GIATRI=? WHERE TENTHAMSO=?',
      [req.body.GIATRI, req.params.TENTHAMSO],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

router.delete('/thamso/:TENTHAMSO', function (req, res, next) {
  db.query(
    'DELETE FROM thamso WHERE TENTHAMSO=?',
    [req.params.TENTHAMSO],
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