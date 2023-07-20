const Entry = require('../models/entryModel'); 
const entriesController = {};

entriesController.postEntry = async (req, res, next) => {

    try {
        // console.log('IN ENTRIES CONTROLLER', req.body)
        const { entry, prompts, date } = req.body; 
        const postedEntry = await Entry.create({
            entry, 
            prompts, 
            date
        })
        res.locals.postedEntry = postedEntry; 
        return next(); 

    } catch (error) {
        next({
            log: error,
            message: 'Error in entriesController.postEntry'
        });
    }
}

entriesController.getEntries = async (req, res, next) => {
    try {
        const entries = await Entry.find({}); 
        res.locals.allEntries = entries;
        return next(); 
        
    } catch (error) {
        next({
            log: error,
            message: 'Error in entriesController.getEntries'
        })
    }
}

module.exports = entriesController; 