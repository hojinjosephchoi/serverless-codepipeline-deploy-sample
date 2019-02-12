"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const cormo = require("cormo");
const mysql_1 = require("cormo/lib/adapters/mysql");
const settings = config.get('database');
let connection = null;
exports.connection = connection;
if (settings) {
    exports.connection = connection = new cormo.Connection(mysql_1.default, settings);
}
