import { given } from '../../steps/given';
import { when } from '../../steps/when';
import { then } from '../../steps/then';

describe('When a user signs up', () => {
    it("The user's profile should be saved in DynamoDB", async () => {
        const { name, email, password } = given.a_random_user();

        console.log({ name, email });

        // Call the lambda function and actually save data in DynamoDB
        const user = await when.a_user_signs_up(name, email, password);

        const ddbUser = await then.user_exists_in_UsersTable(user.username);

        expect(ddbUser).toMatchObject({
            id: user.username,
            name,
            createdAt: expect.stringMatching(
                /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?Z?/g,
            ),
            followersCount: 0,
            followingCount: 0,
            tweetsCount: 0,
            likesCount: 0,
        });

        const [firstName, lastName] = name.split(' ');
        expect(ddbUser?.screenName).toContain(firstName);
        expect(ddbUser?.screenName).toContain(lastName);
    });
});
