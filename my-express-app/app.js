const express = require('express');
const app = express();
const path = require('path');

// Imposta il motore di rendering Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file

// Route per la homepage
app.get('/', (req, res) => {
  res.render('index');
});

// Route per le pagine dinamiche
app.get('/dynamic/:id', (req, res) => {
  const id = req.params.id;
  res.render('dynamic', { id });
});

// Avvia il server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
