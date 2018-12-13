import * as dynamoDbLib from "../lib/dynamo-db-lib";
import { success, failure } from "../lib/response-lib";

export async function main(req, context) {
  const params = {
    TableName: process.env.tableNameKaraoke,
    // Retrieve by userId in dynamoDB
    KeyConditionExpression: "userId = :userId",
    // Actual userId is from request
    ExpressionAttributeValues: {
      ":userId": req.requestContext.identity.cognitoIdentityId
    }
  };

  try {
    const result = await dynamoDbLib.call("query", params);
    // Item: allItems, count: Number of items,
    return success(result.Items);
  } catch (e) {
    return failure({ status: false });
  }
}
