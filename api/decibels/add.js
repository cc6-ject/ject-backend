import uuid from "uuid";
import * as dynamoDbLib from "../lib/dynamo-db-lib";
import { success, failure } from "../lib/response-lib";

export async function main(req, context, callback) {
  const data = JSON.parse(req.body);

  const params = {
    TableName: "Jest_Stats",
    Item: {
      userId: req.requestContext.identity.cognitoIdentityId,
      trainingId: uuid.v1(),
      decibel: data.decibel,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}
