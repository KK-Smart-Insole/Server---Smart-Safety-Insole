module.exports = function(app){
    const monitor = require('./monitorCotroller');

    // 1. 사용자 활동상황 게시 API
    app.post('/app/monitor', monitor.postUserActive);

    // 2. 사용자 활동상황 확인 API
    app.get('/app/monitor/:deviceId', monitor.getUserActive);

    // 3. 응급상황 확인 API
    app.post('/app/monitor/emergency', monitor.postUserEmergency);

    // 4. Last Call
    app.post('/app/monitor/emergency/lastCall', monitor.postLastCall);
}