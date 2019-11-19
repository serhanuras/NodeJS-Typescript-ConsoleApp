export default class OneInstance{

    private static _instance:OneInstance;
    private constructor(name:string){
    }

    public static getInstance():OneInstance{
        if(!this._instance){
            this._instance = new OneInstance('instance created');
        }
        return this._instance;
    }

    public setName():this{
        
        return this;
    }
}