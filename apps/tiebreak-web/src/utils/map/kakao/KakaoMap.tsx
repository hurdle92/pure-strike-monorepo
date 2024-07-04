/*global kakao*/
import { Stack } from "pure-strike-ui";
import React from "react";

declare const kakao: any;

const KakaoMap = ({
  lat,
  lng,
  name,
}: {
  lat?: number;
  lng?: number;
  name?: string;
}) => {
  React.useEffect(() => {
    const mapScript = document.getElementById("mapScript");

    const onLoadKakaoMap = window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 5,
        draggable: true,
        scrollwheel: true,
      };

      const map = new kakao.maps.Map(container, options);

      const markerPosition = new kakao.maps.LatLng(lat, lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        text: "텍스트를 표시할 수 있어요!",
      });
      marker.setMap(map);
      const iwContent = `<a href="https://map.kakao.com/link/map/${lat},${lng}" target="_blank"><div style="padding:10px; font-weight:bold; font-size:13px; text-align:center;">${name}</div></a>`,
        iwPosition = new kakao.maps.LatLng(lat, lng);

      const infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });

      infowindow.open(map, marker);
    });

    mapScript?.addEventListener("load", onLoadKakaoMap);
  }, [lat, lng, name]);

  return (
    <Stack id="map" width={"100%"} height={"200px"} borderRadius={"12px"} />
  );
};

export default KakaoMap;
