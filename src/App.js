import React, {useState, useEffect} from 'react';
import mainImg from './static/image/main_image.jpg';
import Confetti from 'react-confetti';
import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import common from './static/common/common.json';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

const testPageAlert = () => {
    alert('개발중인 페이지입니다...');
    return false;
};

function App() {
    const [selectDate, setSelectDate] = useState(new Date('2023-01-15'));
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
        <div className="App">
            <Confetti
                numberOfPieces="100"
                friction={0.96}
                // initialVelocityX={60}
                // colors={['#FF0000']}
                opacity={0.2}
            />
            <a href="#" onClick={testPageAlert}>
                <img src={mainImg} className="main-image" alt="logo" />
            </a>
            <p>🎉 상렬 그리고 은비, 결혼합니다 🎉</p>

            <DatePicker
                locale={ko}
                dateFormat="yyyy년 M월 d일"
                dateFormatCalendar="yyyy년 M월"
                selected={selectDate}
            />
            <a href="#" id="kakaotalk-sharing-btn">
                <img
                    src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
                    alt="카카오톡 공유 보내기 버튼"
                />
            </a>
        </div>
    );
}

export default App;
