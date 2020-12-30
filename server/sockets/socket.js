const { io } = require('../server');

io.on('connection', (client) => {

    // Se conectó el cliente
    
    console.log('Se conectó un usuario');

    // Emitir mensaje al cliente

    client.emit('saludar', {
        usuario: 'ADMIN',
        message: 'Bienvenido al servidor'
    });

    // Se desconectó el cliente

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchando evento del cliente => saludar

    client.on('saludar', (data, callback) => {
        // client.emit('saludar', data);
        client.broadcast.emit('saludar', data);
        // if (data.from) {
        //     callback({ response: 'Todo salió bien' });
        // } else {
        //     callback({ response: 'Todo salió MAL!!' });
        // }
    });

});