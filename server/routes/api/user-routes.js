const router = require('express').Router();
const {
    //fill with userMethods
    createUser,
    login,
    getUsers,
    getUserProfile,
    updateUser,
    // getUserPreferences,
    // setUserPreferences,
    // getFilterPreferences,
    // setFilterPreferences

} = require('../../controllers/user-controller');


//importing middleware
const { verifyToken } = require('../../utils/auth');

//routes
router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/login')
    .post(login);

router.route('/:id')
    .get(getUserProfile)
    .post(updateUser);

// router.route('/:id/preferences')
//     .get(getUserPreferences);

// router.route(':id/preferences/set')
//     .get(getUserPreferences)
//     .post(setUserPreferences);

// router.route('/filter')
//     .get(getFilterPreferences)
//     .post(setFilterPreferences)


module.exports = router;