import React, { useEffect } from 'react';
import { markerdata } from "../data/markerData";

const KakaoMap = () => {
  useEffect(() => {
    // API 키를 사용하여 카카오 지도 API를 초기화
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=b8dbe2a3f052522b85361d4572cca0ed&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      // 카카오 지도 API 로드 완료 시 실행될 콜백 함수
      window.kakao.maps.load(() => {
        const container = document.getElementById('kakao-map'); // 지도를 표시할 div 요소
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 지도의 중심 좌표 (서울)
          level: 5, // 지도의 확대 레벨
        };

        // 카카오 지도 객체 생성
        const map = new window.kakao.maps.Map(container, options);

        markerdata.forEach((el) => {
            // 마커를 생성합니다
            new window.kakao.maps.Marker({
              //마커가 표시 될 지도
              map: map,
              //마커가 표시 될 위치
              position: new window.kakao.maps.LatLng(el.lat, el.lng),
              //마커에 hover시 나타날 title
              title: el.title,
              imageSize: '5px',
            });
          });
      });
    };

    return () => {
      // 컴포넌트가 언마운트될 때 API 스크립트 제거
      document.head.removeChild(script);
    };
  }, []);

  return <div id="kakao-map" style={{ width: '400px', height: '600px', margin: '0 auto' }} />;
};

export default KakaoMap;