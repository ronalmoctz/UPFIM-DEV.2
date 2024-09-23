const multer = require("multer");
//const { storageTalleres, storageActividades } = require("../utils/cloudinaryConfig");
const { storageActividades } = require("../utils/cloudinaryConfig");
//const uploadTaller = multer({ storage: storageTalleres });
const uploadActividad = multer({ storage: storageActividades });

module.exports = uploadActividad;