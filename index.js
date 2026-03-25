const express = require('express');
const app = express();
const port = 3000;

// Dossier public pour CSS/JS
app.use(express.static('public'));

// Vue EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('calculator');
});


app.listen(port, () => {
  console.log(`App runing on : http://localhost:${port}`);
});