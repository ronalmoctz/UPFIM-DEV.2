const express = require('express');
const router = express.Router();
const {getTalleres,getTallerCrud,insertarTaller,deleteTaller} = require('../controllers/tallerController');
const uploadTaller = require('../middleware/uploadTaller');
router.get('/getTallerCrud', getTallerCrud);
router.get('/getTalleres', getTalleres);
router.post('/insertarTaller', uploadTaller.single('imagen'), insertarTaller);
router.delete('/deleteTaller/:id_taller', deleteTaller);
module.exports = router;
