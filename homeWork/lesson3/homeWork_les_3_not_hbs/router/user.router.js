const router = require('express').Router();

const { userController } = require('../controllers');

router.get('/', userController.getUsers);
router.post('/', userController.postCreateUser);
router.get('/:user_id', userController.getUserId);

module.exports = router;
