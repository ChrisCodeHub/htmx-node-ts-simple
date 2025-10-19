import express from 'express'
import path from 'path'
import router from './routes/routes'


const app = express();


app.set('views', path.join(__dirname, '../views'));  // home for the pug templates, tells express 'where' the templates are
app.set('view engine', 'pug');                       // and say "we're pug templating"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router);   // routes are tidied away in their own folder



// Start server
const PORT=3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
