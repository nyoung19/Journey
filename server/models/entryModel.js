const mongoose = require('mongoose'); 
const { Schema } = mongoose;

const entrySchema = new Schema({
    date: { type: Date, default: Date.now }, 
    prompts: String,
    entry: String
}); 

const Entry = mongoose.model('Entry', entrySchema); 

module.exports = Entry; 