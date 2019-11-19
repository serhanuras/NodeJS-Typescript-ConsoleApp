import 'mocha';
import {expect} from 'chai';
import  OneInstance  from "../src/modules/OneInstance"; 

describe("App method test", ()=>{

    it("Should return object", ()=>{

        const oneInstance = OneInstance.getInstance();

        expect(oneInstance).to.be.instanceof(OneInstance);
    });



});