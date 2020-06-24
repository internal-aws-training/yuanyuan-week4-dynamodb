const { config, DynamoDB } = require("aws-sdk");

config.update({ region: "ap-southeast-1" });

class DynamodbClient {
  constructor() {
    this._db = new DynamoDB({ apiVersion: "2012-08-10" });
  }

  async putItem(tableName, item) {
    var params = {
      TableName: tableName,
      Item: item,
    };
    console.log("params: ", params);
    return this._db.putItem(params).promise();
  }

  async getItem(tableName, key) {
    var params = {
      TableName: tableName,
      Key: key
    };
    console.log("params: ", params);
    return this._db.getItem(params).promise();
  }

  async updateItem(tableName, key, fieldName, newValue) {
    var params = {
      TableName: tableName,
      Key: key,
      ExpressionAttributeValues: {
        ":newValue": {
          S: newValue
        }
      },
      UpdateExpression: `SET ${fieldName} = :newValue`,
      ReturnValues: "ALL_NEW"
    };
    console.log(params);
    return this._db.updateItem(params).promise();
  }

  async deleteItem(tableName, key) {
    var params = {
      TableName: tableName,
      Key: key
    };
    console.log("params: ", params);
    return this._db.deleteItem(params).promise();
  }
}

module.exports = DynamodbClient;
