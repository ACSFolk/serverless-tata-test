'use strict';

const { vehicleService } = require('./services')
const vehicle = new vehicleService()

module.exports.setVehicle = async (event) => {
  const Id = event.pathParameters.Id || 1;
  const response = await vehicle.setVehicle(Id)
  return {
    statusCode: response ? 200 : 400,
    body: JSON.stringify(
      {
        success: response
      }
    ),
  }
};

module.exports.getVehicle = async (event) => {
  const Id = event.pathParameters.Id || 1;
  const response = await vehicle.getVehicle(Id)

  return {
    statusCode: 201,
    body: JSON.stringify(
      response,
      null,
      2,
    ),
  };
};
