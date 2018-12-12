import * as dynamoDbLib from "../lib/dynamo-db-lib";
import { success, failure } from "../lib/response-lib";

export async function main(event, context) {
  const params = {
    TableName: process.env.tableNameKaraoke,
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      createdAt: event.pathParameters.createdAt
    }
  };

  try {
    const result = await dynamoDbLib.call("get", params);
    if (result.Item) {
      // Return the retrieved item
      return success(result.Item);
    } else {
      return failure({ status: false, error: "Item not found." });
    }
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}
