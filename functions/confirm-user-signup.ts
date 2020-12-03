import DynamoDB from 'aws-sdk/clients/dynamodb';
import Chance from 'chance';
const DocumentClient = new DynamoDB.DocumentClient();

const chance = new Chance();

const { USERS_TABLE = '' } = process.env;

module.exports.handler = async (
    event: AWSLambda.PostConfirmationTriggerEvent,
) => {
    if (event.triggerSource === 'PostConfirmation_ConfirmSignUp') {
        const name = event.request.userAttributes['name'];
        const suffix = chance.string({
            length: 8,
            casing: 'upper',
            alpha: true,
            numeric: true,
        });
        const screenName = `${name.replace(/[^a-zA-Z0-9]/g, '')}${suffix}}`;

        const user = {
            id: event.userName,
            name,
            screenName,
            createdAt: new Date().toJSON(),
            followersCount: 0,
            followingCount: 0,
            tweetsCount: 0,
            likesCount: 0,
        };

        await DocumentClient.put({
            TableName: USERS_TABLE,
            Item: user,
            ConditionExpression: 'attribute_not_exists(id)',
        }).promise();

        return event;
    }

    return event;
};
