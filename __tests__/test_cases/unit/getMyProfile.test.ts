import Chance from 'chance';
import { given } from '../../steps/given';
import { when } from '../../steps/when';
import { then } from '../../steps/then';
import path from 'path';

const chance = Chance();

describe('Query.getMyProfile.request template', () => {
  it("should use username as 'id'", () => {
    const templatePath = path.resolve(
      __dirname,
      '../../../mapping-templates/Query.getMyprofile.request.vtl',
    );
    const username = chance.guid();
    const context = given.an_appsync_context({ username }, {});

    const result = when.we_invoke_an_appsync_template(templatePath, context);

    expect(result).toEqual({
      'version': '2018-05-29',
      'operation': 'GetItem',
      'key': {
        'id': {
          'S': username,
        },
      },
    });
  });
});
