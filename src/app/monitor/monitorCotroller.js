const monitorService = require("./monitorService");
const monitorProvider = require("./monitorProvider");

const response = require("../../../config/response");
const baseResponse = require("../../../config/baseResponseStatus");

exports.postUserActive = async function (req, res){
    const {deviceId, walkCount, gpsLocationInfo} = req.body;

    if(!deviceId)
        return res.send(response.response(baseResponse.DEVICE_EMPTY_ID))
    if(!walkCount)
        return res.send(response.response(baseResponse.DEVICE_EMPTY_walkCount))
    if(!gpsLocationInfo)
        return res.send(response.response(baseResponse.DEVICE_EMPTY_gpsLocationInfo))

    const uploadDeviceActiveResponse = await monitorService.uploadActive(
        deviceId, 
        walkCount, 
        gpsLocationInfo
    )
    return res.send(uploadDeviceActiveResponse);
}

exports.getUserActive = async function (req, res){
    const deviceId = req.body;

    if(!deviceId)
        return res.send(response.response(baseResponse.DEVICE_EMPTY_ID));

    const getDeviceActiveResponse = await monitorProvider.getActive(
        deviceId
    ) 

    return res.send(response.response(baseResponse.SUCCESS, getDeviceActiveResponse));
}