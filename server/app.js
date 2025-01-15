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


app.use(cors({
    origin: process.env.MAIN_PAGE.replace(/\/$/, '') , //'http://localhost:5173'
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