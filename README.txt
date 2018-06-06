Instrucciones:

1.	Iniciar el servicio REST ingresando "node app.js" seguido de "ENTER" en consola dentro de la carpeta "Servicio REST" (Requiere tener instalado Node.js).
	Cuando el servidor inicie, el cursos quedará parpadeando, eso significa que el servicio está disponible.
	Para apagar este servidor, en la línea de comandos pulsar las teclas "Ctrl" + "C".
	
	En caso de presentarse problemas en la ejecución del servicio, utilizar el servidor alternativo Json Server.
	Para ejecutarlo, ingresar "json-server --watch granos.json" en la consoola dentro de la carpeta "JSON SERVER".
	Cuando el servicio inicie, mostrará estos mensajes en la pantalla:
		\{^_^}/ hi!

		Loading granos.json
		Done

		Resources
		http://localhost:3000/granos

		Home
		http://localhost:3000

		Type s + enter at any time to create a snapshot of the database
		Watching...
	Para apagar este servidor, en la línea de comandos pulsar las teclas "Ctrl" + "C" y pulsar "S" seguido de "ENTER" cuando pregunte si se desea terminar el proceso por lotes.
	
	Cualquiera de los dos servicios se despliega en el puerto 3000: 
	http://localhost:3000/granos/
	
2.	Cargar el proyecto "CteRestSpringAngularD3C3" en Netbeans y ejecutarlo