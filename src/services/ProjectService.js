const { DynamodbClient } = require("../clients");

class ProjectService {
  constructor() {
    this._client = new DynamodbClient();
    this._tableName = "Project_Yuanyuan";
  }

  async insertData(projectName, projectType, memberName) {
    const item = {
      projectName: {
        S: projectName
      },
      projectType: {
        S: projectType
      },
      memberName: {
        S: memberName
      },
      startTime: {
        S: new Date().toUTCString()
      }
    };
    await this._client.putItem(this._tableName, item);
    console.log("Insert item Successfully");
  }

  async queryDataBy(projectName, projectType) {
    const key = {
      projectName: {
        S: projectName
      },
      projectType: {
        S: projectType
      }
    };
    const result = await this._client.getItem(this._tableName, key);
    console.log("Query data Successfully: ", result);
  }

  async updateMemberName(projectName, projectType, newValue) {
    const key = {
      projectName: {
        S: projectName
      },
      projectType: {
        S: projectType
      }
    };
    console.log(
      "Update item Successfully: ",
      await this._client.updateItem(
        this._tableName,
        key,
        "memberName",
        newValue
      )
    );
  }

  async deleteData(projectName, projectType) {
    const item = {
      projectName: {
        S: projectName
      },
      projectType: {
        S: projectType
      }
    };
    await this._client.deleteItem(this._tableName, item);
    console.log("Delete item Successfully");
  }
}

module.exports = ProjectService;
