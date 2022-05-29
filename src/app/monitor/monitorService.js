const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const secret_config = require("../../../config/secret");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

const monitorDao = require("./monitorDao");

exports.uploadActive = async function (deviceId, walkCount, gpsLocationInfo)
{
    try{
        const connection = await pool.getConnection(async (conn) => conn);

        const uploadActiveParams = [deviceId, walkCount, gpsLocationInfo]
        const activeUploadResult = await monitorDao.uploadActive(connection, uploadActiveParams);

        console.log('업로드된 정보: ' + activeUploadResult);
        connection.release();
        return response(baseResponse.SUCCESS);
    }
    catch{
        return errResponse(baseResponse.DB_ERROR)
    }
}