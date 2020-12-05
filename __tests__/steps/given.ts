require('dotenv').config();

import Chance from 'chance';
import { create as velocityUtilCreate } from 'amplify-appsync-simulator/lib/velocity/util';
import { CognitoIdentityServiceProvider } from 'aws-sdk';
import {
  AuthenticatedUser,
  AppSyncIdentity,
  RandomUser,
} from '../typings/testTypes';

const chance = Chance();
const { COGNITO_USER_POOL_ID, WEB_COGNITO_USER_POOL_CLIENT_ID } = process.env;

const a_random_user = (): RandomUser => {
  const firstName = chance.first({ nationality: 'en' });
  const lastName = chance.last({ nationality: 'en' });
  const suffix = chance.string({
    length: 4,
    pool: 'abcdefghijklmnoprstuvwxyz',
  });
  const name = `${firstName} ${lastName} ${suffix}`;
  const password = chance.string({ length: 8 });
  const email = `${firstName}-${lastName}-${suffix}@appsyncmasterclass.com`;

  return {
    name,
    password,
    email,
  };
};

const an_appsync_context = (
  identity: AppSyncIdentity,
  args: Record<string, any>,
) => {
  const util = velocityUtilCreate([], new Date(), Object());

  const context = {
    identity,
    args,
    arguments: args,
  };

  return { context, ctx: context, util, utils: util };
};

const an_authenticated_user = async (): Promise<AuthenticatedUser> => {
  const cognito = new CognitoIdentityServiceProvider();
  const { name, password, email } = a_random_user();

  const userPoolId = COGNITO_USER_POOL_ID;
  const clientId = WEB_COGNITO_USER_POOL_CLIENT_ID;
  if (!userPoolId || !clientId) return { username: '', name: '', email: '' };

  const signupResponse = await cognito
    .signUp({
      ClientId: clientId,
      Username: email,
      Password: password,
      UserAttributes: [
        {
          Name: 'name',
          Value: name,
        },
      ],
    })
    .promise();

  const username = signupResponse.UserSub;
  console.log(`[${email}] - user has signed up - [${username}]`);

  const response = await cognito
    .adminConfirmSignUp({
      UserPoolId: userPoolId,
      Username: username,
    })
    .promise();

  console.log(`[${email}] - confirmed sign up - ${JSON.stringify(response)}`);

  const { AuthenticationResult } = await cognito
    .initiateAuth({
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: clientId,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    })
    .promise();

  console.log(
    `[${email}] - signed in - accessToken: ${AuthenticationResult?.AccessToken} expires in ${AuthenticationResult?.ExpiresIn}`,
  );

  return {
    username,
    name,
    email,
    idToken: AuthenticationResult?.IdToken,
    accessToken: AuthenticationResult?.AccessToken,
  };
};

const given = {
  a_random_user,
  an_appsync_context,
  an_authenticated_user,
};

export { given };
