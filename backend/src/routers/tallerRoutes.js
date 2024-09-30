const express = require('express');
const router = express.Router();
const {
  getTalleres,
  insertTaller,
  getTallerCrud
} = require('../controllers/tallerController');
const { insertTallerGroup } = require('../controllers/groupTaller');
const uploadTaller = require('../middleware/uploadMiddleware');

router.post(
  '/insertTallerGroup',
  uploadTaller.single('imagen'),
  insertTallerGroup
);

router.get('/getTallerCrud', getTallerCrud);
router.get('/getTalleres', getTalleres);
router.post('/insertTaller', uploadTaller.single('imagen'), insertTaller);

module.exports = router;
