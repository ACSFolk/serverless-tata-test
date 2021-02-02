const Api = require('../api/api')
const { vehicleAdapters } = require('../adapters') 
const { vehicleRepository } = require('../repositories') 
const SWAPI_ENDPOINT = `${process.env.SWAPI_ENDPOINT}`
const repository = new vehicleRepository()

class VehicleService extends Api{
    
    async setVehicle(Id) {
        let data = {};
        this.url = `${SWAPI_ENDPOINT}/vehicle/${Id}`
        try {
            const response = await this.get()
            if (!this.succes(response)) return false
            else data = response.data
        } catch (error) { console.log(error)}

        if (Object.entries(data).length === 0) return false
        repository.put(
            Id,
            vehicleAdapters(data)
        )
        return true
    }

    async getVehicle(Id) {
        return await repository.get(Id)
    }
}

module.exports = VehicleService