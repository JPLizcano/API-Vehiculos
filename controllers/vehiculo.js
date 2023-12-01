const { response } = require("express");

const Vehiculo = require("../models/vehiculo");

const vehiculoGet = async (req, res = response) => {
  const vehiculos = await Vehiculo.find();

  res.json({
    vehiculos,
  });
};

const vehiculoPlacaGet = async (req, res = response) => {
  const placa = req.params.placa;
  try {
    const reparaciones = await Vehiculo.find({ placa });
    res.json({ reparaciones });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al obtener reparaciones por placa." });
  }
};

const vehiculoPost = async (req, res) => {
  const body = req.body;
  let mensaje = "Vehiculo creado.";

  try {
    const vehiculo = new Vehiculo(body);
    await vehiculo.save();
  } catch (error) {
    mensaje = "Problemas al crear el vehiculo.";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const vehiculoPut = async (req, res) => {
  const { numero, placa, horasReparacion, precioReparacion, valorDolar, observaciones } =
    req.body;
  let mensaje = "Modificación exitosa";

  try {
    await Vehiculo.findOneAndUpdate(
      { placa: placa },
      {
        numero: numero,
        horasReparacion: horasReparacion,
        precioReparacion: precioReparacion,
        observaciones: observaciones,
        valorDolar: valorDolar,
      }
    );
  } catch (error) {
    mensaje = "Problemas al modificar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const vehiculoDelete = async (req, res = response) => {
  const { placa } = req.body;
  let mensaje = "Eliminación exitosa";
  try {
    await Vehiculo.deleteOne({ placa: placa });
  } catch (error) {
    mensaje = "Problemas al eliminar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = { vehiculoGet, vehiculoPlacaGet, vehiculoPost, vehiculoPut, vehiculoDelete };