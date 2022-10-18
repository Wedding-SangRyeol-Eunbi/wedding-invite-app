import React, {useEffect} from 'react';
import common from '../static/common/common.json';
import '../static/css/KakaoShare.css';

function KakaoShare() {
    useEffect(() => {
        const kakao = window.Kakao;

        if (!kakao.isInitialized()) {
            kakao.init(common.KAKAO_JAVASCRIPT_KEY);
            console.log(kakao.isInitialized());
            console.log(kakao);
        }

        kakao.Share.createCustomButton({
            container: '#kakaotalk-sharing-btn',
            templateId: 84266,
        });
    }, []);

    return (
        <div>
            <button id="kakaotalk-sharing-btn">카카오톡 공유하기</button>
        </div>
    );
}

export default KakaoShare;
