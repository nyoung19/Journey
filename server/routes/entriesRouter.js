const express = require('express');
const router = express.Router();
const entriesController = require('../controllers/entriesController')

router.post('/', entriesController.postEntry, (req, res) => {
    return res.status(200).json('entry posted');
})

module.exports = router; 