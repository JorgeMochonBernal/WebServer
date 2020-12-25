
	const express = require('express');
	const app = express();
	 
	app.use(express.static(__dirname + '/public'));
	
	app.get('/', (req, resp) => {
	 	let salida = {
	 		nombre:'Coco',
	 		edad: '6',
	 		url: req.url
	 	};
		
		resp.send(salida);
	});

	app.get('/data', (req,resp) => {
		resp.send('Data');
	});
	 
	app.listen(3000, () => {
		console.log('Escuchando peticiones');
	});