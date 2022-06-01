var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.6006146, 126.8651), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.6006146, 126.8651); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    //인포윈도우 띄우기
    var iwContent = '<div style="padding:5px;">한국항공대님의 위치</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.6009000, 126.8651), //인포윈도우 표시 위치입니다. 인포윈도우는 경도 + 2854가 적당함.
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성하고 지도에 표시합니다
    var infowindow = new kakao.maps.InfoWindow({
        map: map, // 인포윈도우가 표시될 지도
        position : iwPosition, 
        content : iwContent,
        removable : iwRemoveable
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);