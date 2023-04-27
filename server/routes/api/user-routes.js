const router = require('express').Router();
const {
    //fill with userMethods
    createUser,
    login,
    getUsers,
    like,
    dislike,
    getUserProfile,
    getMatchMessages,
    getUserMatches,
    userMatched,
    getMatch,
    getMatchField, 
    getPotentialMatch,
    // getUserPreferences,
    // setUserPreferences,
    createMessage,
    // getFilterPreferences,
    // setFilterPreferences

} = require('../../controllers/user-controller');

//importing middleware
const { authMiddleware } = require('../../utils/auth');

//routes
router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/login')
    .post(login);

router.route('/:id')
    .get(getUserProfile);

// router.route('/:id/matches')
//     .get(getUserMatches);

// router.route('/:id/match/messages')
//     .get(getMatch)
//     .get(getMatchMessages)
//     .post(createMessage);

router.route('/field/:username')
    .get(getMatchField);

router.route('/like')
    .post(like);

router.route('/dislike')
    .post(dislike);

// router.route('/:id/preferences')
//     .get(getUserPreferences);

// router.route(':id/preferences/set')
//     .get(getUserPreferences)
//     .post(setUserPreferences);

// router.route('/filter')
//     .get(getFilterPreferences)
//     .post(setFilterPreferences)


module.exports = router;