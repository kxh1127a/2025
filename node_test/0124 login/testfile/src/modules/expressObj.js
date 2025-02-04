const createExp = ( id ) => {
    class ExpressObj {
        constructor( id ){
            this.id = id;
            this.express = require('express');
        }
        createExp(){
            return this.express();
        }
        createRouter(){
            return this.express.Router();
        }
    }
    const expObj = new ExpressObj( id );
    return expObj.createExp();
}

//const expObj = new ExpressObj();
module.exports  = createExp;
