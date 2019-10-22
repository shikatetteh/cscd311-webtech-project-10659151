const express = require('express');

const home = require('../controllers/home');

const router = express.Router();
router.get('/', home.getLoginPage);
router.post('/', home.postLoginPage);
router.get('/booking', home.getBookingPage);
router.post('/booking', home.postBookingPage);
router.get('/portal', home.getPortalPage);

module.exports = router;
