"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const OneInstance_1 = __importDefault(require("../src/modules/OneInstance"));
describe("App method test", () => {
    it("Should return object", () => {
        const oneInstance = OneInstance_1.default.getInstance();
        chai_1.expect(oneInstance).to.be.instanceof(OneInstance_1.default);
    });
});
//# sourceMappingURL=app.test.js.map