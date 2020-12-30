// Client
const socket = io();

// Conexión
socket.on('connect', () => {
    console.log('Conectado al servidor');
});

// Desconexión
socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

// Saludar
socket.emit('saludar', {
    from: 'cliente',
    message: 'Saludando'
}, (respuesta) => {
    console.log(respuesta);
});

// Escuchar saludo
socket.on('saludar', (data) => {
    console.log(data);
});