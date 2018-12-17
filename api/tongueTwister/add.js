import * as dynamoDbLib from '../lib/dynamo-db-lib';
import { success, failure } from '../lib/response-lib';

export async function main(req, context, callback) {
  const data = JSON.parse(req.body);

  const params = {
    TableName: process.env.tableNameTongueTwister,
    Item: {
      userId: req.requestContext.identity.cognitoIdentityId,
      createdAt: Date.now(),
      name: data.name,
      coverage: data.coverage,
      failWords: data.failWords
    }
  };

  try {
    await dynamoDbLib.call('put', params);
    return success(params.Item);
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}
