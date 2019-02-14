import * as AWSXRay from 'aws-xray-sdk';
const AWS = AWSXRay.captureAWS(require('aws-sdk'));

const lambda = new AWS.Lambda({ region: 'ap-northeast-2' });

export async function handler(event, context) {
  try {
    console.log('[api] >> before call back service');
    const environment = process.env.NODE_ENV;
    const result = await lambda.invoke({
      FunctionName: `service-back-${environment}-app`,
      Payload: JSON.stringify({}),
    }).promise();
    console.log('[api] >> after call back service..');
    return {
      statusCode: 200,
      body: JSON.stringify(result.Payload),
    };
  } catch (error) {
    console.log('Error', error.toString());
    throw error;
  }
}
