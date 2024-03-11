import express from 'express';
import morgan from 'morgan';
import { conexion } from './src/db.js';

import authRoutes from './src/routes/auth.routes.js';

conexion.connect(function(error) {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw error; 
    } else {
        console.log("Conexión exitosa a la base de datos");
        
        // Crear la aplicación Express
        const app = express();

        // Middlewares
        app.use(morgan('dev'));
        app.use(express.json());

        // Rutas
        app.use('/ElectroStar', authRoutes);

        // Iniciar el servidor
        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    }
});
