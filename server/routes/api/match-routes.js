const router = require('express').Router();
const { 
  like,
  dislike,
  userMatched,
  getMatch,
  getMatchField, 
  getPotentialMatch,
  getUserMatches,
} = require('../../controllers/match-controller');

router.route('/:id')
  .get(getUserMatches);

router.route('/match/:id')
  .get(getMatch);
  
router.route('/field/:username')
  .get(getMatchField);

router.route('/like')
    .post(like);

router.route('/dislike')
    .post(dislike);

module.exports = router;
