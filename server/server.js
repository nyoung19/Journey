const express = require('express');
const app = express(); //APP IS AN INSTANCE OF EXPRESS
const PORT = 3000;
const path = require('path');

//MIDDLEWARE FOR PARSING JSON REQUEST BODIES
// app.use(express.json()); 

app.use(express.static(path.resolve(__dirname, '../client')));
//ISSUES WITH PROPERLY SERVING INDEX HTML - MIME TYPE ISSUE
app.get('/', (req, res) => {
  res.status(200).send("hello world");
  // express.static(path.resolve(__dirname, '../index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})