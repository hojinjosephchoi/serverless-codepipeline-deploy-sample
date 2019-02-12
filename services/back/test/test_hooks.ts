import { connection } from '../app/models';

beforeEach(async () => {
  await connection!.manipulate(['deleteAll']);
});

after(async () => {
  await connection!.dropAllModels();
});
