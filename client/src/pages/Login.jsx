import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginUser } from '../api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../api/users';
import { ingresoDatosUsuario } from '../Components/Redux/Usuario/UsuarioSilce.jsx';
import { ingresoDatosCompra } from '../Components/Redux/Compra/EntradaCompraSlice.jsx';


const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const datoss = useSelector((state) => state.usuario);
    const data = useSelector((state) => state.entradaCompra);

    const handleLogin = async (data) => {
        try {
            const res = await loginUser({
                email: data.email,
                password: data.password,
            });

            if (res.status === 200) {
                const datos = await getUser(data.email);
                const nuevosDatos = {
                    ...datoss,
                    nombre: datos.nombre,
                    email: datos.email,
                    password: datos.password,
                };
                const nuevosDatosG = {
                    ...data,
                    nombre: datos.nombre,
                    email: datos.email,
                };
                dispatch(ingresoDatosCompra(nuevosDatosG));
                dispatch(ingresoDatosUsuario(nuevosDatos));
                console.log(datoss);
                console.log(data);

                navigate('/home');
            }
        } catch (error) {
            console.error('Error registrando usuario:', error);
        }
    };

    return (
        <section className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
            <div className="m-5 p-5 bg-black text-white rounded-lg shadow-md max-w-md w-full">
                <h3 className="text-3xl font-bold mb-4">Iniciar Sesión</h3>
                <form className="grid grid-cols-1 gap-4 w-full" onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <label htmlFor="email" className="block text-gray-300">Correo Electrónico</label>
                        <input
                            id="email"
                            {...register('email', { required: true })}
                            type="email"
                            required
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                        />
                        {errors.email && <span className="text-red-500">Este campo es requerido</span>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-300">Contraseña</label>
                        <input
                            id="password"
                            {...register('password', { required: true })}
                            type="password"
                            required
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                        />
                        {errors.password && <span className="text-red-500">Este campo es requerido</span>}
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="mt-4 px-4 py-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
                <div className="text-sm text-center text-gray-300 mt-4">
                    ¿No tienes una cuenta?{' '}
                    <Link to="/register" className="text-red-500 hover:text-red-300">
                        Regístrate aquí
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Login;
