import express from 'express'
import path from 'path'
import router from './routes/routes'


const app = express();


app.set('views', path.join(__dirname, '../views'));  // home for the pug templates
app.set('view engine', 'pug');                       // and lets say "its pug templating"

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(express.json());

app.use(express.static('public'));

app.use('/', router);   // routes are tidied away in their own folder



// Start server
const PORT=3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
