//
// loginApp
// 2025/01/24 yoon
// 2025/01/31 zard...
//
const config = require('./config/config.js');
const createExp = require('./modules/expressObj');
const loginApp = createExp('loginApp');
const bodyParser = require('body-parser');

// Environment
loginApp.use( bodyParser.urlencoded({ extended: false }) )

// pathInfo
const routeHome = require('./pathinfo/routeHome');
const routeJoin = require('./pathinfo/routeJoin');
const createUser = require('./pathinfo/routeCreateUser');
const routeLogin = require('./pathinfo/routeLogin');

loginApp.route('/')
    .get( (req, res) => {
        routeHome( req, res );
    })

loginApp.route('/join')
    .get( (req, res) => {
        routeJoin( req, res );
    } )

loginApp.route('/createUser')
    .post( (req, res) => {
        createUser( req, res );
    } )

loginApp.route('/login')
    .get( (req, res) => {
        routeLogin( req, res );
    } )

loginApp.listen( config.port, config.hostname, () => {
    console.log(`Service open ${config.port}`);
} )

