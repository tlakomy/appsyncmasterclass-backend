import path from 'path';
import Chance from 'chance';
import { given } from '../../steps/given';
import { when } from '../../steps/when';
import { SAMPLE_USER_PROFILE } from '../../mocks/user';

const chance = Chance();
const { ...user } = SAMPLE_USER_PROFILE;

const templatePath = path.resolve(
  __dirname,
  '../../../mapping-templates/Mutation.editMyProfile.request.vtl',
);
const username = chance.guid();

describe('Mutation.editMyProfile.request template', () => {
  it("Should use 'input' fields in expression values when all of them are provided", () => {
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
        'expression':
          'set #name = :name, imageUrl = :imageUrl, backgroundImageUrl = :backgroundImageUrl, bio = :bio, #location = :location, website = :website, birthdate = :birthdate',
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

  it("Should use 'input' fields in expression values when some of them are null", () => {
    const {
      name,
      backgroundImageUrl,
      bio,
      birthdate,
      imageUrl,
      location,
      website,
    } = user;
    const context = given.an_appsync_context(
      { username },
      {
        input: {
          name,
          backgroundImageUrl: null,
          bio: null,
          birthdate: null,
          imageUrl,
          location: null,
          website,
        },
      },
    );

    const result = when.we_invoke_an_appsync_template(templatePath, context);

    expect(result).toMatchObject({
      'version': '2018-05-29',
      'operation': 'UpdateItem',
      'key': {
        'id': {
          'S': username,
        },
      },
      'update': {
        'expression':
          'set #name = :name, imageUrl = :imageUrl, backgroundImageUrl = :backgroundImageUrl, bio = :bio, #location = :location, website = :website, birthdate = :birthdate',
        'expressionValues': {
          ':name': { 'S': name },
          ':imageUrl': { 'S': imageUrl },
          ':backgroundImageUrl': { 'NULL': true },
          ':bio': { 'NULL': true },
          ':birthdate': { 'NULL': true },
          ':location': { 'NULL': true },
          ':website': { 'S': website },
        },
      },
    });
  });
});
