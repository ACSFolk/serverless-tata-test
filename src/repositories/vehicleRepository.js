const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB({
    apiVersion: '2012-08-10',
})
const TABLE = `${process.env.TABLE}`

class VehicleRepository{
    
    async set(id, vehicle) {
        people.partitionKey = `Vehicle.${id.toString()}`
        people.sortKey = 'Vehicle'
        const marshalled = AWS.DynamoDB.Converter.marshall(vehicle);

        const item = {
            TableName: TABLE,
            Item: marshalled,
            ReturnValues: 'NONE',
            ReturnConsumedCapacity: 'NONE',
            ReturnItemCollectionMetrics: 'NONE',
        }

        return await dynamodb.putItem(item).promise()
    }

    async get(id) {
        const partitionKey = `Vehicle.${id.toString()}`
        const sortKey = 'Vehicle'
 
        const params = {
            TableName: TABLE,
            KeyConditionExpression: '#pk = :pk and #sk = :sk',
            ExpressionAttributeNames: {
                '#pk': 'partitionKey',
                '#sk': 'sortKey'
            },
            ExpressionAttributeValues: {
                ':pk': { S: partitionKey },
                ':sk': { S: sortKey},
            },
        }

        const response = await dynamodb.query(params).promise()
        const unmarshalled = AWS.DynamoDB.Converter.unmarshall(response.Items[0])
        return unmarshalled
    }
}

module.exports = VehicleRepository