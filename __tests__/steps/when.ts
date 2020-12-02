require('dotenv').config();
const { COGNITO_USER_POOL_ID, AWS_REGION } = process.env;

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

const when = { we_invoke_confirmUserSignup };

export { when };
