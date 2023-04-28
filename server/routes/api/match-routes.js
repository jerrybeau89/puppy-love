const Router = require('express').Router();

const {
    getMatch,
    getUserMatches,
    userMatched,
} = require('../../controllers/match-controller');

router.route('/')
    .get(getMatch);

