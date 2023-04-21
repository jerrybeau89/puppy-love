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
    .post(createUser)
    .put(authMiddleware);

router.route('/login')
    .post(login);

module.exports = router;