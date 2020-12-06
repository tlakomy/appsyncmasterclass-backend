import path from 'path';
import Chance from 'chance';
import { given } from '../../steps/given';
import { when } from '../../steps/when';
import { SAMPLE_USER_PROFILE } from '../../mocks/user';

const chance = Chance();
const { ...user } = SAMPLE_USER_PROFILE;

describe('Mutation.editMyProfile.request template', () => {
  it("Should use 'input' fields in expression values", () => {
    const templatePath = path.resolve(
      __dirname,
      '../../../mapping-templates/Mutation.editMyProfile.request.vtl',
    );
    const username = chance.guid();
    const context = given.an_appsync_context(
      { username },
      { input: { ...user } },
    );

    const result = when.we_invoke_an_appsync_template(templatePath, context);
    const {
      name,
      backgroundImageUrl,
      bio,
      birthdate,
      imageUrl,
      location,
      website,
    } = user;

    expect(result).toMatchObject({
      'version': '2018-05-29',
      'operation': 'UpdateItem',
      'key': {
        'id': {
          'S': username,
        },
      },
      'update': {
        'expressionValues': {
          ':name': { 'S': name },
          ':imageUrl': { 'S': imageUrl },
          ':backgroundImageUrl': { 'S': backgroundImageUrl },
          ':bio': { 'S': bio },
          ':birthdate': { 'S': birthdate },
          ':location': { 'S': location },
          ':website': { 'S': website },
        },
      },
    });
  });
});
