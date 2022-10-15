const express = require('express');
const multer = require('multer');
const path = require('path');
const router = new express.Router();
const {v4: uuidv4} = require('uuid');
const FILE_DIR = path.resolve('./tmp');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, FILE_DIR);
  },
  filename: (req, file, cb) => {
    const [, extension] = file.originalname.split('.');
    cb(null, `${uuidv4()}.${extension}`);
  },
});

const {asyncWrapper} = require('../helpers/apiHelpers');

const {uploadController} = require('../controllers/filesController');

const uploadMiddleware = multer({storage});

// eslint-disable-next-line max-len
router.post(
    '/upload',
    uploadMiddleware.single('avatar'),
    asyncWrapper(uploadController)
);
router.use('/download', express.static(FILE_DIR));

module.exports = {filesRouter: router};
