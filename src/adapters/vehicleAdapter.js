const { vehicle } = require('../models')

module.exports = (source) => {
    const target = new vehicle()
    target.capacidadCarga = source.cargo_capacity;
    target.consumibles = source.consumables;
    target.costoCreditos = source.cost_in_credits;
    target.creacion = source.created;
    target.tripulacion = source.crew;
    target.edicion = source.edited;
    target.longitud = source.length;
    target.fabricante = source.manufacturer;
    target.velocidadMaximaAtmosfera = source.max_atmosphering_speed;
    target.modelo = source.model;
    target.nombre = source.name;
    target.pasajeros = source.edipassengersted;
    target.pilotos = source.pilots;
    target.peliculas = source.films;
    target.url = source.url;
    target.claseVehiculo = source.vehicle_class;
    return target;
}