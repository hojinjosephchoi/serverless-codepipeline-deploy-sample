"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class MyModelService {
    static async getMyModel() {
        let name;
        if (models_1.connection) {
            const my_model = await models_1.Mymodel.where().select(['name']).one();
            name = my_model.name;
        }
        else {
            name = 'dummy';
        }
        return name;
    }
}
exports.MyModelService = MyModelService;
