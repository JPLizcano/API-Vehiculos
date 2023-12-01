const { Schema, model } = require("mongoose");
const VehiculoSchema = Schema({
  numero: {
    unique: true,
    type: String,
    required: [true, "El número es obligatorio!"],
  },
  placa: {
    unique: true,
    type: String,
    required: [true, "La placa es obligatoria!"],
  },
  horasReparacion: {
    type: String,
    required: [true, "Las horas de reparación son obligatorias!"],
  },
  precioReparacion: {
    type: String,
    required: [true, "El precio de reparación es obligatorio!"],
  },
  observaciones: {
    type: String,
    required: [true, "Las observaciones son obligatorias!"],
    maxlength: [300, 'Debe tener máximo 250 caracteres!']
  },
  valorDolar: {
    type: String,
    required: [true, "El valor del dolar es obligatorio!"]
  },
});
module.exports = model("Vehiculo", VehiculoSchema);
