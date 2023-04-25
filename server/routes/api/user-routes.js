const router = require('express').Router();
const {
    //fill with userMethods
    createUser,
    login, 
    getUserProfile,
    getMatchMessages,
    getUserMatches,
    userMatched,
    getMatch,
    getMatchField, 
    getPotentialMatch,
    getUserPreferences,
    setUserPreferences,
    createMessage,
    getFilterPreferences,
    setFilterPreferences

} = require('../../controllers/user-controller');

//importing middleware
const { authMiddleware } = require('../../utils/auth');

//routes
router.route('/')
    .post(createUser);

router.route('/login')
    .post(login);

router.route('/:id')
    .get(getUserProfile);

router.route('/:id/matches')
    .get(getUserMatches);


router.route('/:id/match/messages')
    .get(getMatch)
    .get(getMatchMessages)
    .post(createMessage);

router.route('/field')
    .get(getMatchField);

router.route('/field/potential')
    .get(getMatchField)
    .get(getPotentialMatch);

router.route('/field/potential/matched')
    .get(getMatchField)
    .get(getPotentialMatch)
    .post(userMatched);

router.route('/:id/preferences')
    .get(getUserPreferences);

router.route(':id/preferences/set')
    .get(getUserPreferences)
    .post(setUserPreferences);

router.route('/filter')
    .get(getFilterPreferences)
    .post(setFilterPreferences)


module.exports = router;