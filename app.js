
//Paso1
	const http = require('http');

	http.createServer((req,resp) => {
		//Paso2
		resp.writeHead(200,{ 'Content-Type': 'application/json' });

			//Paso2
			let salida = {
				nombre: 'jorge',
				edad: 20,
				url: req.url
			}

		//Paso2
		resp.write(JSON.stringify(salida));

		//Paso 1 resp.write('Hola coco');
		resp.end();
	})
	.listen(8080);

	console.log('Escuchando el puerto 8080');