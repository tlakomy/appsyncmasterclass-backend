require('dotenv').config();
import { DynamoDB } from 'aws-sdk';
const { USERS_TABLE } = process.env;

const user_exists_in_UsersTable = async (id: string) => {
  const dynamo = new DynamoDB.DocumentClient();

  if (!USERS_TABLE) return;

  console.log(`looking for user [${id}] in table [${USERS_TABLE}]`);

  const resp = await dynamo
    .get({
      TableName: USERS_TABLE,
      Key: {
        id,
      },
    })
    .promise();

  expect(resp.Item).toBeTruthy();

  return resp.Item;
};

const then = { user_exists_in_UsersTable };

export { then };
