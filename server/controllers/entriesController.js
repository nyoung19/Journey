const dotenv = require('dotenv');
dotenv.config();
const entriesController = {};

entriesController.postEntry = async (req, res) => {

    try {
        console.log('IN ENTRIES CONTROLLER', req.body.entry)

    } catch (error) {
        next({
            log: error,
            message: 'Error in entriesController.postEntry'
        });
    }
    return next(); 
}

module.exports = entriesController; 