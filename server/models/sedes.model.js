import mongoose from "mongoose";

const SedesSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    ciudad: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    url:{
      type: String,
      required: true,
    },
  },{
    timestamps: true,
    versionKey: false
  })

export default mongoose.model('Sedes', SedesSchema);