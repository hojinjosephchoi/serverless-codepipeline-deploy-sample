import { connection,  Mymodel } from '../models';

export class MyModelService {
  static async getMyModel() {
    let name: string;
    if (connection) {
      const my_model = await Mymodel.where().select(['name']).one();
      name = my_model ? my_model.name : 'empty';
    } else {
      name = 'dummy';
    }
    return name;
  }
}
