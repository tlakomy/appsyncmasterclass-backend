import Chance from 'chance';
import { create as velocityUtilCreate } from 'amplify-appsync-simulator/lib/velocity/util';
import { RandomUser, AppSyncIdentity } from '../typings/testTypes';

const chance = Chance();

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

const given = {
  a_random_user,
  an_appsync_context,
};

export { given };
