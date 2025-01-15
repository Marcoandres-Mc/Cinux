import mongoose from "mongoose";

const PeliculasSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    productora: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    url:{
      type: String,
      required: true,
    },
  }, {
    timestamps: true,
    versionKey: false
  })

export default mongoose.model('Peliculas', PeliculasSchema);
