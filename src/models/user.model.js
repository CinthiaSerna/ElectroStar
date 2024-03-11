import conexion from '../db.js';

export const registrarUsuario = async (datosUsuario) => {
    const { documento, nombre, primer_apellido, segundo_apellido, email, contraseña } = datosUsuario;

    const consulta = `INSERT INTO users (documento, nombre, primer_apellido, segundo_apellido, email, contraseña) VALUES (?, ?, ?, ?, ?, ?)`;
    const valores = [documento, nombre, primer_apellido, segundo_apellido, email, contraseña];

    try {
        await conexion.query(consulta, valores);
        console.log('Usuario registrado exitosamente');
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        throw error;
    }
};

