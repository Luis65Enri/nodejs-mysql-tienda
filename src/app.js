const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { PORT } = require('./configuraciones/config');

const app = express();
app.use(cors({
    origin: 'http://localhost:8081',
    methods: ['GET', 'POST']
}));
app.set('port', PORT);
app.use(morgan('common'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Routing
app.use('/api/', require('./rutas'));
// Other routes...

// Listening for requests
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto ' + app.get('port'));
});