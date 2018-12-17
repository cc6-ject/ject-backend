import * as dynamoDbLib from '../lib/dynamo-db-lib';
import { success, failure } from '../lib/response-lib';

export async function main(req, context, callback) {
  const data = JSON.parse(req.body);

  const params = {
    TableName: process.env.tableNameKaraoke,
    Item: {
      userId: req.requestContext.identity.cognitoIdentityId,
      createdAt: Date.now(),
      startedAt: data.startedAt,
      finishedAt: data.finishedAt,
      // pics: data.pics,
      decibels: data.decibels,
      avgDecibel: data.avgDecibel,
      wordsPerEachMinute: data.wordsPerEachMinute,
      transcripts: data.transcripts,
      fillerWords: data.fillerWords,
      wordCounts: data.wordCounts,
      duration: data.duration
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
