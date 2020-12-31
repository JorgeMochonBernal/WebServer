
  const express = require('express');
  const app = express();

  app.use(express.static(__dirname + '/public'));

  app.listen(3000, () => {
      console.log('Escuchando peticiones');
  });

  app.set('view engine', 'hbs');

  app.get('/', (req, resp) => {
    resp.render('home', {
      nombre: 'Jorge',
      anio: new Date().getFullYear()
    });
  });
