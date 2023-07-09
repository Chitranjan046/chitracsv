const express = require('express');
const router = express.Router();

const multer = require('multer');

/**  IMPORTING CONTROLLERS **/
const homeController = require('../controllers/homeController');
const fileController = require('../controllers/fileController');
const upload = multer({ dest: 'uploads/files' })

/**  MAKING ROUTES  **/
router.get('/', homeController.home);
router.post('/upload', upload.single('file'), fileController.upload);
router.get('/view/:id', fileController.view);
router.get('/delete/:id', fileController.delete);

module.exports = router;