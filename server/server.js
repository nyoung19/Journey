const express = require('express');
const app = express(); //express() is a top-level func exported by the express module
const PORT = 3000;
const path = require('path');
// const cors = require('cors');
const promptsRouter = require('./routes/promptsRouter');
const entriesRouter = require('./routes/entriesRouter');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
dotenv.config();

const URI = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.fd5epvb.mongodb.net/`
mongoose.connect(URI)
.then(() => {console.log('Connected to MongoDB')})
.catch ((err) => {
    console.log('Error connecting to DB:', err);
})

//express.json() - built in middleware for parsing incoming reqs with JSON payloads
app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use(cors());

//serving static files in public directory
app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/generate_prompts', promptsRouter);
app.use('/entries', entriesRouter);

//handling undefined endpoints
app.use('*', (req, res) => res.sendStatus(404));

//global error handler
app.use((err, req, res) => {
  const template = {
    status: 500,
    message: 'Error in middleware',
    log: 'Error in middleware',
  };
  const errObj = { ...template, ...err };
  return res.status(errObj.status).send(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

//---------------------------------------------------------------------------------
//ARCHIVES

//alternative to serving public dir with express.static
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname,'../public/index.html'));
// });

// app.get('/index.js', (req, res) => {
//   res.sendFile(path.resolve(__dirname,'../src/client/index.js'));
// });
