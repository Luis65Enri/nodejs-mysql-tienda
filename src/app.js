const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const sincronizarModelos = require('./configuraciones/sincronizar-modelos.js');//modelos creados en documento externo

const app = express();
app.use(cors({
    origin: 'http://localhost:8081', // Origen permitido para las solicitudes
    methods: ['GET', 'POST'] // Métodos permitidos
}));

app.set('port', PORT);
app.use(morgan('common'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//-----Rutas-----//
app.use('/api/', require('./rutas'));
app.use('/api/usuario', require('./rutas/ruta_usuario'));
app.use('/api/proveedor', require('./rutas/ruta_proveedores.js'));
app.use('/api/servicio', require('./rutas/ruta_servicios.js'));
app.use('/api/marca', require('./rutas/ruta_marca'));
app.use('/api/rol', require('./rutas/ruta_rol-cuenta'));
app.use('/api/categoria', require('./rutas/ruta_categorias.js'));
app.use('/api/producto', require('./rutas/ruta_producto'));
app.use('/api/factura/venta', require('./rutas/ruta_factura_venta.js'));
app.use('/api/factura/compra', require('./rutas/ruta_factura_compra.js'));
app.use('/api/detalle/venta', require('./rutas/ruta_detalle_factura_venta.js'));
app.use('/api/detalle/compra', require('./rutas/ruta_detalle_factura_compra.js'));
app.use('/inicio',require('./rutas/ruta_login'));

//-----Fin rutas-----//
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto ' + app.get('port'));
});
