import Chance from 'chance';
import { given } from '../../steps/given';
import { when } from '../../steps/when';
import { AuthenticatedUser } from '../../typings/testTypes';

const chance = Chance();
let user: AuthenticatedUser;

describe('Given an authenticated user', () => {
  beforeAll(async () => {
    user = await given.an_authenticated_user();
  });

  it('The user can fetch their profile with getMyProfile', async () => {
    const profile = await when.a_user_calls_getMyProfile(user);

    expect(profile).toMatchObject({
      id: user.username,
      name: user.name,
      imageUrl: null,
      backgroundImageUrl: null,
      bio: null,
      location: null,
      website: null,
      birthdate: null,
      createdAt: expect.stringMatching(
        /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?Z?/g,
      ),
      followersCount: 0,
      followingCount: 0,
      tweetsCount: 0,
      likesCount: 0,
    });

    const [firstName, lastName] = profile.name.split(' ');
    expect(profile?.screenName).toContain(firstName);
    expect(profile?.screenName).toContain(lastName);
  });

  it('The user can edit their profile with editMyProfile', async () => {
    const TEST_NAME = chance.name();

    const profile = await when.a_user_calls_editMyProfile(user, {
      input: {
        'name': TEST_NAME,
      },
    });

    expect(profile).toMatchObject({
      id: user.username,
      name: TEST_NAME,
      imageUrl: null,
      backgroundImageUrl: null,
      bio: null,
      location: null,
      website: null,
      birthdate: null,
      createdAt: expect.stringMatching(
        /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?Z?/g,
      ),
      followersCount: 0,
      followingCount: 0,
      tweetsCount: 0,
      likesCount: 0,
    });
  });
});
