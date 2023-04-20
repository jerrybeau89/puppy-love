const router = require('express').Router();
const {
    //fill with userMethods
    createUser,
    getSingleUser,
    login
} = require('../../controllers/user-controller');

//importing middleware
const { authMiddleware } = require('../../utils/auth');

//routes
router.route('/')
    .post(createUser);

router.route('/:id')
    .get(getSingleUser);

router.route('/login')
    .post(login);

module.exports = router;