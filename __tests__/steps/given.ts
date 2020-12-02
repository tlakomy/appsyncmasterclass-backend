import Chance from 'chance';

const chance = Chance();

interface RandomUser {
    name: string;
    password: string;
    email: string;
}

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

const given = {
    a_random_user,
};

export { given };
