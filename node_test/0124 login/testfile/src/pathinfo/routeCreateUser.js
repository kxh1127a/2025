const routeCreateUser = ( req, res ) => {
    const fs = require('fs');
    const path = require('path');
    const fileIO = require('../modules/fileIO');
    const user = require("../config/user");
    const fileConf = require('../config/fileConf');

    user.id = req.body.inId;
    user.pw = req.body.inPw;

    // typescript interface처럼 구현
    fileConf.fileMode = "w";
    fileConf.filePath = path.join(__dirname,"../assets/jsons/userList.json");
    fileConf.fileData = JSON.stringify( user );
    fileIO( fileConf );
    res.redirect("/login");

}
module.exports = routeCreateUser;
