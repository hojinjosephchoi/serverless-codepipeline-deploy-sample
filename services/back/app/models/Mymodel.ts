import * as cormo from 'cormo';

import { connection } from './connection';

export class Mymodel extends cormo.BaseModel {
  static initialize() {
    this.column('name', { type: String, required: true });
  }

  id?: number;
  name: string;
}

if (connection) {
  Mymodel.connection(connection!);
}
