import * as dynamoDbLib from "../lib/dynamo-db-lib";
import { success, failure } from "../lib/response-lib";

export async function main(event, context) {
  const params = {
    TableName: "Jest_Stats",
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      trainingId: event.pathParameters.id
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
    return failure({ status: false });
  }
}
