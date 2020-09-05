const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const {createConnection} = require('./database');
createConnection();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/entries'));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});