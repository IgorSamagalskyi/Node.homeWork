const router = require('express').Router();

const { authController } = require('../controllers');

router.get('/', authController.getLogin);
router.post('/', authController.postLogin);
router.get('/register', authController.getRegister);

module.exports = router;
