const express = require('express');
const router = express.Router();
const {
  getTalleres,
  getTallerCrud,
  insertarTaller,
} = require('../controllers/tallerController');
const { insertTallerGroup } = require('../controllers/groupTaller');
const uploadTaller = require('../middleware/uploadTaller');
router.post(
  '/insertTallerGroup',
  uploadTaller.single('imagen'),
  insertTallerGroup
);
router.get('/getTallerCrud', getTallerCrud);
router.get('/getTalleres', getTalleres);
router.post('/insertarTaller', uploadTaller.single('imagen'), insertarTaller);
// router.post('/insertTaller', uploadTaller.single('imagen'), insertTaller);
module.exports = router;
