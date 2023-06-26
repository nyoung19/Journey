const express = require('express');
const app = express(); //APP IS AN INSTANCE OF EXPRESS
const PORT = 3000;
const path = require('path');


//MIDDLEWARE FOR PARSING JSON REQUEST BODIES
// app.use(express.json()); 

// app.use(express.static('public')); //works, why doesnt it work with path.resolve (below), isnt it better to have path for absolute routing or whatever (below)
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname,'../public/index.html'));
// }); 

// app.get('/index.js', (req, res) => {
//   res.sendFile(path.resolve(__dirname,'../src/client/index.js'));
// });


// express.static(path.resolve(__dirname,'../public')));
// app.use('/static', express.static(path.resolve(__dirname, 'public'))); //doesnt work
// app.use(express.static(path))

// app.get('/', (req, res) => {
//   res.status(200).send("hello world");
//   // express.static(path.resolve(__dirname, '../index.html'));
// });

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})