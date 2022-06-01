const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const secret_config = require("../../../config/secret");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");
const andaMemberInfo = require("./phoneNumbers");

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

exports.sendSMSmsg = async function(deviceId){

    // Load the AWS SDK for Node.js
    var AWS = require('aws-sdk');
    // Set region
    AWS.config.update({region: 'ap-northeast-1'});

    // Create publish parameters
    var params1 = {
    Message: '항공대님의 넘어짐이 감지되었으나 반응이 없습니다.\n앱으로 위치를 확인해주세요.', /* required */
    PhoneNumber: andaMemberInfo.phoneNumbers.juniPhone,
    };

    var params2 = {
        Message: '항공대님의 넘어짐이 감지되었으나 반응이 없습니다.\n앱으로 위치를 확인해주세요.', /* required */
        PhoneNumber: andaMemberInfo.phoneNumbers.girinPhone,
    };

    var params3 = {
        Message: '항공대님의 넘어짐이 감지되었으나 반응이 없습니다.\n앱으로 위치를 확인해주세요.', /* required */
        PhoneNumber: andaMemberInfo.phoneNumbers.minjPhone,
    };

    var params4 = {
        Message: '항공대님의 넘어짐이 감지되었으나 반응이 없습니다.\n앱으로 위치를 확인해주세요.', /* required */
        PhoneNumber: andaMemberInfo.phoneNumbers.sujinPhone,
    };
    // Create promise and SNS service object
    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params1).promise();
    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params2).promise();
    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params3).promise();
    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params4).promise();

    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(
    function(data) {
        console.log("MessageID is " + data.MessageId);
        return 1;
    }).catch(
        function(err) {
        console.error(err, err.stack);
    });
}

exports.sendLastCallSMSmsg = async function(deviceId){

    // Load the AWS SDK for Node.js
    var AWS = require('aws-sdk');
    // Set region
    AWS.config.update({region: 'ap-northeast-1'});

    // Create publish parameters
    var params1 = {
    Message: '[Last Call]\n항공대님의 기기 베터리가 5%미만입니다.\n앱으로 위치를 확인해주세요.', /* required */
    PhoneNumber: andaMemberInfo.phoneNumbers.juniPhone,
    };

    var params2 = {
        Message: '[Last Call]\n항공대님의 기기 베터리가 5%미만입니다.\n앱으로 위치를 확인해주세요.', /* required */
        PhoneNumber: andaMemberInfo.phoneNumbers.girinPhone,
    };

    var params3 = {
        Message: '[Last Call]\n항공대님의 기기 베터리가 5%미만입니다.\n앱으로 위치를 확인해주세요.', /* required */
        PhoneNumber: andaMemberInfo.phoneNumbers.minjPhone,
    };

    var params4 = {
        Message: '[Last Call]\n항공대님의 기기 베터리가 5%미만입니다.\n앱으로 위치를 확인해주세요.', /* required */
        PhoneNumber: andaMemberInfo.phoneNumbers.sujinPhone,
    };
    // Create promise and SNS service object
    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params1).promise();
    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params2).promise();
    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params3).promise();
    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params4).promise();

    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(
    function(data) {
        console.log("MessageID is " + data.MessageId);
        return 1;
    }).catch(
        function(err) {
        console.error(err, err.stack);
    });
}