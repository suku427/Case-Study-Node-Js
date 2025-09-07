const express = require('express');
const router = express.Router();
const { getVisitorsDashboard } = require('../controllers/visitors');

router.get('/dashboard/visitors', getVisitorsDashboard);

module.exports = router;