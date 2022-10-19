import React from 'react';
import {Map, MapMarker} from 'react-kakao-maps-sdk';
import couple from '../static/img/coupleCharacter.png';
import '../static/css/KakaoMap.css';

function KakaoMap() {
    return (
        <div id="kakaoMapDiv">
            <p className="subTitle">오시는길</p>
            <Map
                id="kakaoMap"
                center={{lat: 37.514999, lng: 127.0995839}}
                style={{width: '100%', height: '180px'}}
                level={5}
            >
                <MapMarker
                    position={{lat: 37.515983, lng: 127.0995839}}
                    image={{
                        src: couple,
                        size: {
                            width: 35,
                            height: 35,
                        },
                        options: {
                            offset: {x: 17, y: 47},
                        },
                    }}
                />
                <p>아펠가모 잠실</p>
                <p>
                    서울특별시 송파구 올림픽로35길 137
                    <br />
                    한국광고문화회관 2층
                </p>

                <p>
                    화환은 정중히 <b style={{color: 'red'}}>사양</b>합니다.
                    <br />
                    좋은 마음만 감사히 받겠습니다.
                </p>
            </Map>
        </div>
    );
}

export default KakaoMap;
