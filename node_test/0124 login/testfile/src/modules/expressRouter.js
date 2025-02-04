const createExp = ( id ) => {
    class ExpressRouter {
        constructor( id ){
            this.id = id;
            this.express = require('express');
        }
        createExp(){
            return this.express.Router();
        }
    }
    const expRouter = new ExpressRouter( id );
    return expRouter.createExp();
}

module.exports  = createExp;
