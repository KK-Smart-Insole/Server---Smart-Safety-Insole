//디바이스 운동 정보 업로드
async function uploadActive(connection, uploadActiveParams) {
    const uploadActiveQuery = `
                insert into  activity(deviceId, walkCount, gpsLocationInfo) 
                VALUES (?, ?, ?);
                `;
    const insertUploadActiveRow = await connection.query(
        uploadActiveQuery,
        uploadActiveParams
    );

    console.log(insertUploadActiveRow);

    return insertUploadActiveRow;
}

//디바이스 운동 정보 받아오기
async function getActive(connection, deviceId){
    const getActiveQuery = `
            SELECT createdAt, walkCount, gpsLocationInfo
            FROM activity
            WHERE deviceId=?;
            `;
    const [activeRow] = await connection.query(getActiveQuery, deviceId);

    console.log(activeRow);

    return activeRow;
}

module.exports = {
    uploadActive,
    getActive
};