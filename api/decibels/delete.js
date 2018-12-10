import * as dynamoDbLib from "../lib/dynamo-db-lib";
import { success, failure } from "../lib/response-lib";

export async function main(req, context) {
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: req.requestContext.identity.cognitoIdentityId,
      trainingId: req.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("delete", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}
