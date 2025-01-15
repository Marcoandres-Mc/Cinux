import Pelicula from '../models/peliculas.model.js'

export const getPeliculas = async (req, res) => {
    const foundPeliculas = await Pelicula.find();
    if(!foundPeliculas){
        return res.status(404).json({mensaje: 'Aun no se ha creado nada aqui'})
    }
    res.json(foundPeliculas);
}


export const getPelicula = async (req, res) => {
    try {
        const foundPelicula = await Pelicula.findById(req.params.id);
        if (!foundPelicula) {
            return res.status(404).json({ mensaje: 'Pelicula no encontrado' });
        }
        res.json(foundPelicula);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

export const registerPelicula = async (req, res) => {
    const { nombre, categoria, marca, precio, stock, url, descripcion } = req.body;
    
    if (!nombre || !categoria || !marca || !precio || !stock || !url || !descripcion) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    try {
        const newPelicula = new Pelicula({
            nombre,
            categoria,
            productora,
            descripcion,
            url,
            fechaEstreno,
        });

        const PeliculaSaved = await newPelicula.save();
        res.status(201).json(PeliculaSaved);

    } catch (error) {
        res.status(501).json({ mensaje: error.message });
    }
}

export const deletePelicula = async (req, res) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(400).json({ mensaje: 'ID es requerido' });
    }
  
    try {
        await Pelicula.findByIdAndDelete(id);
        res.json({ mensaje: 'Pelicula eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}



