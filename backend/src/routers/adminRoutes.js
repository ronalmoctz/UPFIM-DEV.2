const express = require('express');
const {
  registerAdminController,
  getAdminProfileController,
  getAdminsController,
  updateAdminController,
  deleteAdminController,
} = require('../controllers/adminController');
const {
  getTalleres,
  getTallerCrud,
  insertarTaller,
  deleteTaller,
  getActividades,
  insertActividad,
  deleteActividad,
  updateActividad,
  getActividadById,
} = require('../controllers/Dashboard/adminDashboardController');
const uploadTaller = require('../middleware/uploadTaller');
const uploadActividad = require('../middleware/uploadMiddleware');

const verifyToken = require('../middleware/verifyToken');
const checkRole = require('../middleware/checkRole');

const router = express.Router();

router.post(
  '/admin/register',
  verifyToken,
  checkRole(['admin']),
  registerAdminController,
);

// router.post(
//   '/admin/featured-gallery',
// // verifyToken,
// // checkRole(['admin']),
//   addFeaturedImage,
// );

/**
 * Admin CRUD
 */

router.get(
  '/admin/profile',
  verifyToken,
  checkRole(['admin']),
  getAdminProfileController,
);
router.get(
  '/admin/getAdmins',
  verifyToken,
  checkRole(['admin']),
  getAdminsController,
);
router.put(
  '/updateAdmin/:id_admin',
  // verifyToken,
  // checkRole(['admin']),
  updateAdminController,
);
router.delete(
  '/deleteAdmin/:adminId',
  // verifyToken,
  // checkRole(['admin']),
  deleteAdminController,
);

// -> END

router.get('/getTallerCrud', getTallerCrud);
router.get('/getTalleres', getTalleres);
router.post('/insertarTaller', uploadTaller.single('imagen'), insertarTaller);
router.delete('/deleteTaller/:id_taller', deleteTaller);

router.get('/getActividades', getActividades);
router.post(
  '/insertActividad',
  uploadActividad.single('imagen'),
  insertActividad,
);
router.delete('/deleteActividad/:id_actividad', deleteActividad);
router.put(
  '/updateActividad/:id_actividad',
  uploadActividad.single('imagen'),
  updateActividad,
);
router.get('/getActividad/:id_actividad', getActividadById);

module.exports = router;
