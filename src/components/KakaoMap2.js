import React, {useState, useEffect} from 'react';
import {Map, MapMarker} from 'react-kakao-maps-sdk';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ToastMessage from '../components/common/ToastMessage.js';
import coupleIcon from '../static/img/coupleCharacter.png';
import hallIcon from '../static/img/hallIcon.png';
import copyIcon from '../static/img/copyIcon.png';
import '../static/css/KakaoMap.css';
function KakaoMap() {
    const [ToastStatus, setToastStatus] = useState(false);
    const activeToast = () => {
        setToastStatus(true);
    };

    useEffect(() => {
        if (ToastStatus) {
            setTimeout(() => setToastStatus(false), 1000);
        }
    }, [ToastStatus]);

    return (
        <div id="kakaoMapDiv">
            <p className="subTitle">오시는길</p>
            <h4 className="hallAddress">
                <img className="prefixIcon" src={hallIcon} />
                아펠가모 잠실, 2층 단독웨딩홀
            </h4>
            <Map
                id="kakaoMap"
                center={{lat: 37.5145, lng: 127.0995839}}
                style={{width: '100%', height: '180px'}}
                level={5}
                draggable={false}
                zoomable={true}
            >
                <MapMarker
                    position={{lat: 37.515983, lng: 127.0995839}}
                    image={{
                        src: coupleIcon,
                        size: {
                            width: 35,
                            height: 35,
                        },
                        options: {
                            offset: {x: 17, y: 47},
                        },
                    }}
                />
                <p className="hallAddress">
                    서울특별시 송파구 올림픽로35길 137
                    <br />
                    한국광고문화회관 2층
                    <br />
                    <span className="subMsg">
                        {' '}
                        (<span className="metroLine2">잠실역</span> 7번 출구 도보 5분)
                    </span>
                    <CopyToClipboard
                        text="서울특별시 송파구 올림픽로35길 137 한국광고문화회관"
                        onCopy={activeToast}
                    >
                        <span className="copyText">
                            <br />
                            <img className="prefixIcon2" src={copyIcon} />
                            &nbsp;주소복사
                        </span>
                    </CopyToClipboard>
                </p>
                <p className="warningMsg">
                    <span className="warningMsg">*</span> 지하주차장 출입구가 좁습니다.
                    <br />
                    SUV등 큰 차량 진입시 유의해주세요.
                </p>
                <br />
                <br />
                <p>
                    화환은 정중히 <b style={{color: 'red', marginRight: '2px'}}>사양</b>합니다.
                    <br />
                    좋은 마음만 감사히 받겠습니다.
                </p>
            </Map>
            {ToastStatus && <ToastMessage msg="주소가 복사되었습니다." />}
        </div>
    );
}

export default KakaoMap;
