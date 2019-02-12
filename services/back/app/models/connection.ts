import * as config from 'config';
import * as cormo from 'cormo';
import adapter from 'cormo/lib/adapters/mysql';

const settings = config.get<any>('database');

let connection: cormo.Connection | null = null;
if (settings) {
  connection = new cormo.Connection(adapter, settings);
}
export {
  connection,
};
