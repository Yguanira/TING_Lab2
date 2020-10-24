var express = require('express');
var router = express.Router();

// Services
var services = new Array();

var service1 = new Array();
service1 ['columsOrder'] = 'order-md-2';
service1 ['imageUrl'] = 'https://www.beetrack.com/hs-fs/hubfs/Caracter%C3%ADsticas%20del%20servicio%20al%20cliente.jpg?width=1086&name=Caracter%C3%ADsticas%20del%20servicio%20al%20cliente.jpg';
service1 ['heading'] = 'Heading 1';
service1 ['subheading'] = 'Subheading 1';
service1 ['description'] = 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.';

services.push(service1)

var service2 = new Array();
service2 ['columsOrder'] = '';
service2 ['imageUrl'] = 'https://i1.wp.com/gaztenpresa.org/statics/2016/03/contrato-de-prestacion-de-servicios.jpg?fit=640%2C452&ssl=1';
service2 ['heading'] = 'Heading 2';
service2 ['subheading'] = 'Subheading 2';
service2 ['description'] = 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.';

services.push(service2)

var service3 = new Array();
service3 ['columsOrder'] = 'order-md-2';
service3 ['imageUrl'] = 'https://www.genwords.com/blog/wp-content/uploads/2017/11/126-scaled.jpg';
service3 ['heading'] = 'Heading 3';
service3 ['subheading'] = 'Subheading 3';
service3 ['description'] = 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.';

services.push(service3)

/* ====== GET Services page ====== */
router.get('/', function(req, res, next) {
  res.render('servicios', 
    { 
      title: 'Servicios',
      services: services
    }
  );
});

module.exports = router;
