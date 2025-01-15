import mongoose from "mongoose";

const DulceriaSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
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
    stock: {
      type: Number,
      required: true,
    }
  }, {
    timestamps: true,
    versionKey: false
  })

export default mongoose.model('Dulceria', DulceriaSchema);