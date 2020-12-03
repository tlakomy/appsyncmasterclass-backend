require('dotenv').config();

import fs from 'fs';
import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { AppSyncContext } from '../typings/testTypes';
import { map as velocityValueMapper } from 'amplify-appsync-simulator/lib/velocity/value-mapper/mapper';
import velocityTemplate from 'amplify-velocity-template';

const {
  COGNITO_USER_POOL_ID,
  AWS_REGION,
  WEB_COGNITO_USER_POOL_CLIENT_ID,
} = process.env;

const we_invoke_confirmUserSignup = async (
  username: string,
  name: string,
  email: string,
) => {
  const handler = require('../../functions/confirm-user-signup').handler;
  const context = {};

  if (!COGNITO_USER_POOL_ID || !AWS_REGION) return;

  const event: AWSLambda.PostConfirmationConfirmSignUpTriggerEvent = {
    version: '1',
    region: AWS_REGION,
    userPoolId: COGNITO_USER_POOL_ID,
    userName: username,
    triggerSource: 'PostConfirmation_ConfirmSignUp',
    callerContext: {
      clientId: '',
      awsSdkVersion: '1',
    },
    request: {
      userAttributes: {
        sub: username,
        'cognito:email_alias': email,
        'cognito:user_status': 'CONFIRMED',
        email_verified: 'false',
        name,
        email,
      },
    },
    response: {},
  };

  await handler(event, context);
};

const a_user_signs_up = async (
  name: string,
  email: string,
  password: string,
) => {
  const cognito = new CognitoIdentityServiceProvider();
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

  try {
    const response = await cognito
      .adminConfirmSignUp({
        UserPoolId: userPoolId,
        Username: username,
      })
      .promise();

    console.log(`[${email}] - confirmed sign up - ${response}`);
  } catch (error) {
    console.log(error);
  }

  return {
    username,
    name,
    email,
  };
};

const we_invoke_an_appsync_template = (
  templatePath: string,
  context: AppSyncContext,
) => {
  const template = fs.readFileSync(templatePath, { encoding: 'utf-8' });
  const ast = velocityTemplate.parse(template);
  const compiler = new velocityTemplate.Compile(ast, {});
  const result = compiler.render(context);

  return JSON.parse(result);
};

const when = {
  we_invoke_confirmUserSignup,
  a_user_signs_up,
  we_invoke_an_appsync_template,
};

export { when };
