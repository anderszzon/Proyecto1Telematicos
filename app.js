const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

//settings
//app.set('port',process.env.PORT || 3000);
app.set('port',process.env.PORT);


//app.set('views', path.join(__dirname, 'views'));
app.set('views','/app/views');

app.set('view engine', 'ejs');

app.use(express.static("/app/public"));
//app.use(express.static('public'));

// middlewares
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// routes
app.use(routes);

// satic files
//app.use(express.static(path.join(__dirname, 'public')));

//start th server
app.listen(app.get('port'),() => {console.log('Servidor en el puerto',app.get('port'))});
