"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OneInstance {
    constructor(name) {
    }
    static getInstance() {
        if (this._instance == undefined) {
            this._instance = new OneInstance('instance created');
        }
        return this._instance;
    }
    setName() {
        return this;
    }
}
exports.default = OneInstance;
//# sourceMappingURL=OneInstance.js.map