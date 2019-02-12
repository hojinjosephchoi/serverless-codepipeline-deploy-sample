import { expect } from 'chai';
import * as sinon from 'sinon';

describe('supplier', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('sayhello', async () => {
    expect('sayhello').to.eql('sayhello');
  });
});
