const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const secret_config = require("../../../config/secret");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

const monitorDao = require("./monitorDao");

exports.getActive = async function (deviceId)
{
    try{
        const connection = await pool.getConnection(async (conn) => conn);

        const getActive = await monitorDao.getActive(connection, deviceId);

        console.log("받아온 정보: " + getActive);
        connection.release();

        return getActive;
    }
    catch{
        return errResponse(baseResponse.DB_ERROR);
    }
}