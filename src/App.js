import React, {useEffect} from 'react';
import mainImg from './static/image/main_image.jpg';
// import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import common from './static/common/common.json';
import './App.css';

// const {width, height} = useWindowSize();

const testPageAlert = () => {
    alert('개발중인 페이지입니다...');
    return false;
};

const shareToKakaotalk = () => {
    Kakao.init(common.KAKAO_JAVASCRIPT_KEY);

    Kakao.Share.createCustomButton({
        container: '#kakaotalk-sharing-btn',
        templateId: 82466,
    });
};

function App() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.0.0/kakao.min.js';
        script.integrity =
            'sha384-PFHeU/4gvSH8kpvhrigAPfZGBDPs372JceJq3jAXce11bVA6rMvGWzvP4fMQuBGL';
        script.crossOrigin = 'anonymous';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="App">
            <Confetti
                // width={width}
                // height={height}
                numberOfPieces="100"
                friction={0.96}
                initialVelocityX={60}
                colors={['#FF0000']}
                opacity={0.6}
            />
            <a href="#" onClick={testPageAlert}>
                <img src={mainImg} className="main-image" alt="logo" />
            </a>
            <p>🎉 상렬 그리고 은비, 결혼합니다 🎉</p>

            <a id="kakaotalk-sharing-btn" href="#" onClick={shareToKakaotalk}>
                <img
                    src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
                    alt="카카오톡 공유 보내기 버튼"
                />
            </a>
        </div>
    );
}

export default App;
