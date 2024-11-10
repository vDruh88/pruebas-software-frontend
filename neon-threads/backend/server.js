const cors = import ('cors');
app.use(cors({
    origin: 'http://localhost:3000', // Cambia a la URL del frontend en producción
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true // Si necesitas enviar cookies u otras credenciales
}));
