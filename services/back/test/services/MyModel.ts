import { expect } from 'chai';
import * as sinon from 'sinon';

import { connection } from '../../app/models';
import { MyModelService } from '../../app/services/MyModelService';

const my_model_data = {
  name: '헬로',
};

describe('supplier', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('getMyModel', async () => {
    await connection!.manipulate([
      { create_mymodel: { id: 'mymodel', ...my_model_data } },
    ]);

    const name = await MyModelService.getMyModel();
    expect(my_model_data.name).to.eql(name);
  });
});
