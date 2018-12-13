import * as dynamoDbLib from "../lib/dynamo-db-lib";
import { success, failure } from "../lib/response-lib";

export async function main(req, context) {
  const params = {
    TableName: process.env.tableNameTongueTwister,
    Key: {
      userId: req.requestContext.identity.cognitoIdentityId,
      createdAt: req.pathParameters.createdAt
    }
  };

  try {
    const result = await dynamoDbLib.call("delete", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}
