"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MyModelService_1 = require("./services/MyModelService");
async function handler(event, context) {
    console.log('[back] back called from api');
    return {
        result: await MyModelService_1.MyModelService.getMyModel(),
    };
}
exports.handler = handler;
