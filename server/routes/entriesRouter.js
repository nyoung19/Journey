const express = require('express');
const router = express.Router();
const entriesController = require('../controllers/entriesController')

router.post('/', entriesController.postEntry, (req, res) => {
    console.log('back in entries router after entry posted', res.locals.postedEntry); 
    return res.status(200).json('entry posted');
})

router.get('/', entriesController.getEntries, (req, res) => {
    console.log('all entries from DB', res.locals.allEntries); 
    return res.status(200).json('all entries retrieved from DB')
})
module.exports = router; 