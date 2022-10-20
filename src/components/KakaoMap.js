import React, {useState, useEffect} from 'react';
import {Map, MapMarker} from 'react-kakao-maps-sdk';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ToastMessage from '../components/common/ToastMessage.js';
import coupleIcon from '../static/img/coupleCharacter.png';
import copyIcon from '../static/img/copyIcon.png';
import '../static/css/KakaoMap.css';
function KakaoMap() {
    const [ToastStatus, setToastStatus] = useState(false);
    const activeToast = () => {
        setToastStatus(true);
    };

    const mapClickHandler = () => {
        window.open('http://naver.me/x5gZbFJM');
    };

    useEffect(() => {
        if (ToastStatus) {
            setTimeout(() => setToastStatus(false), 1000);
        }
    }, [ToastStatus]);

    return (
        <div id="kakaoMapDiv">
            <p className="subTitle">오시는길</p>
            <Map
                id="kakaoMap"
                center={{lat: 37.5145, lng: 127.0995839}}
                style={{width: '100%', height: '180px'}}
                level={5}
                draggable={false}
                zoomable={true}
                onClick={mapClickHandler}
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
                <div style={{textAlign: 'left', marginTop: '15px'}}>
                    <span style={{fontSize: '15px', fontWeight: 'bold'}}>
                        아펠가모 잠실, 2층 단독웨딩홀
                    </span>
                    <br />
                    <span style={{fontSize: '13px'}}>
                        서울특별시 송파구 올림픽로35길 137 (신천동),
                        <br />
                        한국광고문화회관 2층&nbsp;&nbsp;
                        <CopyToClipboard
                            text="서울특별시 송파구 올림픽로35길 137 한국광고문화회관"
                            onCopy={activeToast}
                        >
                            <span className="copyText">
                                <img className="prefixIcon2" src={copyIcon} />
                                &nbsp;주소복사
                            </span>
                        </CopyToClipboard>
                    </span>
                    <div>
                        <span style={{fontSize: '14px', fontWeight: 'bold'}}>{'‣ '}도보안내</span>
                        <br />
                        <span style={{fontSize: '13px'}}>
                            잠실역 7번 출구 200m 직진, Tower730 빌딩에서 우회전 (도보 5분)
                        </span>
                    </div>
                    <div>
                        <span style={{fontSize: '14px', fontWeight: 'bold'}}>{'‣ '}차량안내</span>
                        <br />
                        <span style={{fontSize: '13px'}}>
                            - 잠실역에서 잠실대교 방면 200m 직진 {'>'} 잠실나루역 방향 우회전{' > '}
                            170m 후 우회전{' > '}한국광고문화회관
                        </span>
                        <br />
                        <span style={{fontSize: '13px'}}>
                            - 잠실대교에서 잠실역 방면{' > '}잠실대교남단 교차로{' > '}
                            잠실나루역 방향 좌회전{' > '}170m 후 우회전{' > '}
                            한국광고문화회관
                        </span>
                        <br />
                    </div>
                    <div>
                        <span style={{fontSize: '14px', fontWeight: 'bold'}}>{'‣ '}주차안내</span>
                        <br />
                        <span style={{fontSize: '13px'}}>건물 내 지하주차장 2시간 무료</span>
                        <span className="warningMsg">
                            &nbsp;(B1층에서 주차등록 필수)
                            <br />
                            * 지하주차장 출입구가 좁습니다.
                            <br />
                            SUV 등 큰 차량 진입 시 유의해 주세요.
                        </span>
                    </div>
                    <div>
                        <span style={{fontSize: '14px', fontWeight: 'bold'}}>{'‣ '}피로연안내</span>
                        <br />
                        <span style={{fontSize: '13px'}}>
                            B1층 뷔페 (13:30 ~ 15:30) / * 예식시간 14:00
                        </span>
                        <br />
                    </div>
                </div>
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
