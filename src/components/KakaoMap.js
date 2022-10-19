import React from 'react';
import {Map, MapMarker} from 'react-kakao-maps-sdk';
import couple from '../static/img/coupleCharacter.png';
import '../static/css/KakaoMap.css';

function KakaoMap() {
    return (
        <div id="kakaoMapDiv">
            <Map
                id="kakaoMap"
                center={{lat: 37.515983, lng: 127.0995839}}
                style={{width: '100%', height: '250px'}}
                level={4}
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
            </Map>
        </div>
    );
}

export default KakaoMap;
