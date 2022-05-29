module.exports = {

    // 단순 API SUCCESS
    SUCCESS : { "isSuccess": true, "code": 1000, "message":"성공" },

    // User -> 회원가입 관련 Error 코드
    SIGNUP_EMAIL_EMPTY : { "isSuccess": false, "code": 2001, "message":"이메일을 입력해주세요" },
    SIGNUP_NAME_EMPTY : { "isSuccess": false, "code": 2002, "message":"이름을 입력해주세요" },
    SIGNUP_PASSWORD_EMPTY : { "isSuccess": false, "code": 2003, "message":"비밀번호를 입력해주세요"},
    SIGNUP_EMAIL_DUPLICATED : { "isSuccess": false, "code": 2004, "message":"이미 가입된 회원입니다"},

    // Devie 관련 Error
    DEVICE_EMPTY_ID : { "isSuccess": false, "code": 3001, "message":"기기 일련번호가 없습니다." },
    DEVICE_EMPTY_walkCount : { "isSuccess": false, "code": 3002, "message":"걷기 데이터가 없습니다." },
    DEVICE_EMPTY_gpsLocationInfo : { "isSuccess": false, "code": 3003, "message":"위치 정보가 없습니다." },

    // DB
    DB_ERROR : { "isSuccess": false, "code": 4001, "message":"DB연결 실패" },
}