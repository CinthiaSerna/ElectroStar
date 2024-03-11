import { registrarUsuario } from '../models/user.model.js';

export const register = async (req, res) => {
    const { documento, nombre, primer_apellido, segundo_apellido, email, contraseña } = req.body;

    try {
        await registrarUsuario({
            documento,
            nombre,
            primer_apellido,
            segundo_apellido,
            email,
            contraseña
        });

        res.send('Usuario registrado exitosamente');
        console.log(registrarUsuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};

export const login = (req, res) => res.send("login");
