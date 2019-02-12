import * as cormo from 'cormo';

const is_in_console = process.env.IN_CONSOLE === 'true';

cormo.BaseModel.lean_query = true;

import { connection } from './connection';
export { connection };

export * from './Mymodel';

try {
  if (connection) {
    const deasync = require('deasync');
    deasync(async (callback) => {
      try {
        await connection!.applySchemas({ verbose: is_in_console });
        callback(null);
      } catch (error) {
        callback(error);
      }
    })();
  }
} catch (error) {
  if (error.message !== "Cannot find module 'deasync'") {
    console.log(error);
    while (error.cause) {
      error = error.cause;
    }
    throw error;
  }
}
