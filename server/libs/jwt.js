import jwt from 'jsonwebtoken';

export default function createAssessToken(payLoad) {
    const SECRET_KEY = "tu_clave_secreta";
    return new Promise((resolve, reject) => {
        jwt.sign(
            payLoad, 
            SECRET_KEY, 
            { expiresIn: '1d' }, 
            (error, token) => {
                if (error) {
                    console.log(error);
                    reject('No se pudo generar el token');
                }
                resolve(token);
        });
    });
}