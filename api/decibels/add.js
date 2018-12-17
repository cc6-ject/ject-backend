import * as dynamoDbLib from '../lib/dynamo-db-lib';
import { success, failure } from '../lib/response-lib';

export async function main(req, context, callback) {
  const data = JSON.parse(req.body);

  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: req.requestContext.identity.cognitoIdentityId,
      createdAt: Date.now(),
      decibels: data.decibel,
      avgDecibel: data.avgDecibel,
      duration: data.duration,
      transcripts: data.transcripts
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
