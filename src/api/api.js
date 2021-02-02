const axios = require('axios');

class Api {
    constructor(path) {
        this.path = path
    }

    async get() {
        return axios.get(this.path)
    }

    success(response) {
        return response.status === 200
    }
}

module.exports = Api