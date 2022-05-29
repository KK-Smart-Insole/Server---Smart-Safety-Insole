
// node_modules의 express 패키지를 가져온다.
var express = require('./config/express')

//app이라는 변수에 express 함수의 변환 값을 저장한다.
var app = express()

//환경변수에서 port를 가져온다. 환경변수가 없을시 5050포트를 지정한다.
var port = app.listen(process.env.PORT || 8080);

//API 정의 시작
app.get('/', function(req, res) {
    res.send("<h1>Express server Start</h1>")
})

// express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다
app.listen(port, function() {
    console.log('start! express server');
})