import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import peliculasRoutes from './routes/peliculas.routes.js';
import authRoutes from './routes/auth.routes.js';
import dulceriaRoutes from './routes/dulceria.routes.js'
import sedesRoutes from './routes/sedes.routes.js'
import ventaDeEntradasRoutes from './routes/ventaDeEntradas.routes.js'



const app = express();
dotenv.config();

app.use(morgan('dev'));
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Conectado');
})

// Configuración de CORS
const allowedOrigins = [
    'https://cinux.vercel.app',
    'http://localhost:5173' // Opcional, para desarrollo local
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true); // Permitir la solicitud
        } else {
            callback(new Error('Origen no permitido por CORS')); // Bloquear la solicitud
        }
    },
    credentials: true
}));

app.use('/api', peliculasRoutes);
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', dulceriaRoutes);
app.use('/api', sedesRoutes);
app.use('/api', ventaDeEntradasRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo salió mal!', error: err.message });
});

export default app;