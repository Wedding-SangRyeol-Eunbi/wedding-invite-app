import React, {useState, useEffect} from 'react';
import {Map, MapMarker} from 'react-kakao-maps-sdk';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import useCollapse from 'react-collapsed';
import {FaPlus, FaMinus} from 'react-icons/fa';
import ToastMessage from '../components/common/ToastMessage.js';
import coupleIcon from '../static/img/icon/coupleCharacter.png';
import copyIcon from '../static/img/icon/copyIcon.png';
import kakaonavi from '../static/img/icon/kakaonavi.png';
import tmap from '../static/img/icon/tmap.png';
import navermap from '../static/img/icon/navermap.png';
import common from '../static/common/common.json';
import '../static/css/KakaoMap.css';
function KakaoMap() {
    const [ToastStatus, setToastStatus] = useState(false);
    const activeToast = () => {
        setToastStatus(true);
    };

    const {
        getCollapseProps: getWalkCollapseProps,
        getToggleProps: getWalkToggleProps,
        isExpanded: isWalkExpanded,
    } = useCollapse();
    const {
        getCollapseProps: getCarCollapseProps,
        getToggleProps: getCarToggleProps,
        isExpanded: isCarExpanded,
    } = useCollapse();
    const {
        getCollapseProps: getParkingCollapseProps,
        getToggleProps: getParkingToggleProps,
        isExpanded: isParkingExpanded,
    } = useCollapse();
    const {
        getCollapseProps: getBuffetCollapseProps,
        getToggleProps: getBuffetToggleProps,
        isExpanded: isBuffetExpanded,
    } = useCollapse();

    const runTmap = () => {
        window.location.href = 'tmap://search?name=아펠가모잠실';
    };

    const runNaverMap = () => {
        window.location.href = 'nmap://search?query=아펠가모잠실&appname=wedding-invite-app';
    };

    const rumKakaoNavi = () => {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
            kakao.init(common.KAKAO_JAVASCRIPT_KEY);
        }
        Kakao.Navi.start({
            name: '아펠가모 잠실',
            x: 127.0995839,
            y: 37.51606,
            coordType: 'wgs84',
        });
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
                zoomable={false}
            >
                <MapMarker
                    position={{lat: 37.51606, lng: 127.0995839}}
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
                <div className="navigationAppBtn">
                    <button onClick={runTmap}>
                        <img src={tmap} />
                        <p>티맵</p>
                    </button>
                    <button id="start-navigation" onClick={rumKakaoNavi}>
                        <img src={kakaonavi} />
                        <p>카카오내비</p>
                    </button>
                    <button onClick={runNaverMap}>
                        <img src={navermap} />
                        <p>네이버지도</p>
                    </button>
                </div>

                <div style={{textAlign: 'left'}}>
                    <div className="hallAddress hallInfo">아펠가모 잠실, 2층 단독웨딩홀</div>
                    <span className="hallAddress">
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
                        <button className="mapToggleBtn" {...getWalkToggleProps()}>
                            <span>
                                {isWalkExpanded ? (
                                    <FaMinus className="expandIcon" color="lightGray" />
                                ) : (
                                    <FaPlus className="expandIcon" color="gray" />
                                )}{' '}
                                도보안내
                            </span>
                        </button>
                        <section {...getWalkCollapseProps()}>
                            <div className="expandContents">
                                잠실역 7번 출구 200m 직진, Tower730 빌딩에서 우회전 (도보 5분)
                            </div>
                        </section>
                    </div>
                    <div>
                        <button className="mapToggleBtn" {...getCarToggleProps()}>
                            <span>
                                {isCarExpanded ? (
                                    <FaMinus className="expandIcon" color="lightGray" />
                                ) : (
                                    <FaPlus className="expandIcon" color="gray" />
                                )}{' '}
                                차량안내
                            </span>
                        </button>
                        <section {...getCarCollapseProps()}>
                            <div className="expandContents">
                                1. 잠실역에서 잠실대교 방면 200m 직진 {'>'} 잠실나루역 방향 우회전
                                {' > '}
                                170m 후 우회전{' > '}한국광고문화회관
                            </div>
                            <div className="expandContents" style={{marginTop: '5px'}}>
                                2. 잠실대교에서 잠실역 방면{' > '}잠실대교남단 삼거리{' > '}
                                잠실나루역 방향 좌회전{' > '}170m 후 우회전{' > '}
                                한국광고문화회관
                            </div>
                        </section>
                    </div>
                    <div>
                        <button className="mapToggleBtn" {...getParkingToggleProps()}>
                            <span>
                                {isParkingExpanded ? (
                                    <FaMinus className="expandIcon" color="lightGray" />
                                ) : (
                                    <FaPlus className="expandIcon" color="gray" />
                                )}{' '}
                                주차안내
                            </span>
                        </button>
                        <section {...getParkingCollapseProps()}>
                            <div className="expandContents">
                                건물 내 지하주차장 2시간 무료
                                <span className="warningMsg">
                                    &nbsp;(B1층에서 주차등록 필수)
                                    <br />* 지하주차장 출입구가 넓지 않습니다.
                                    <br /> SUV 등 큰 차량 진입 시 유의해 주세요.
                                </span>
                            </div>
                        </section>
                    </div>
                    <div>
                        <button className="mapToggleBtn" {...getBuffetToggleProps()}>
                            <span>
                                {isBuffetExpanded ? (
                                    <FaMinus className="expandIcon" color="lightGray" />
                                ) : (
                                    <FaPlus className="expandIcon" color="gray" />
                                )}{' '}
                                피로연안내
                            </span>
                        </button>
                        <section {...getBuffetCollapseProps()}>
                            <div className="expandContents">
                                B1층 뷔페 (13:30 ~ 15:30) / * 예식시간 14:00
                            </div>
                        </section>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    화환은 정중히 <b style={{color: 'red', marginRight: '2px'}}>사양</b>
                    합니다.
                    <br />
                    좋은 마음만 감사히 받겠습니다.
                </p>
            </Map>
            {ToastStatus && <ToastMessage msg="주소가 복사되었습니다." />}
        </div>
    );
}

export default KakaoMap;
