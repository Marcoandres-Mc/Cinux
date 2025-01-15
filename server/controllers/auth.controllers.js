import User from '../models/user.model.js';
import createAccessToken from '../libs/jwt.js'; // Corrige la importación aquí
import bcrypt from 'bcryptjs';

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ mensaje: 'Usuario no encontrado' });
        }

        const matchPassword = await bcrypt.compare(password, user.password);

        if (!matchPassword) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        const token = await createAccessToken({ id: user._id });
        res.cookie("token", token);

        return res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const logout = async (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({ mensaje: 'Logout exitoso' });
};

export const profile = async (req, res) => {
    res.json({ mensaje: 'Profile' });
};