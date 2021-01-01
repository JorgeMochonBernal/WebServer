
  const express = require('express');
  const app = express();
  const hbs = require('hbs');

  app.use(express.static(__dirname + '/public'));

  hbs.registerPartials(__dirname + '/views/parciales');

  app.set('view engine', 'hbs');

  hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
  });

  hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split('');

    palabras.forEach((palabra, idx) => {
      palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLocaleLowerCase();
    });

    return palabras.join('');
    
  });

  app.get('/', (req, resp) => {
    resp.render('home', {
      nombre: 'Jorge',
    });
  });

  app.get('/about',(req,resp) => {
    resp.render('about', {
    });
  });

  app.listen(3000, () => {
      console.log('Escuchando peticiones');
  });
