import React from 'react';
import mainImg from './static/img/img02_sizing.jpg';
import Confetti from 'react-confetti';
import KakaoShare from './components/KakaoShare';
import WeddingDate from './components/WeddingDate';
import './static/css/App.css';
import TopNavigator from './components/TopNavigator';
import KakaoMap from './components/KakaoMap';
import FamilyProfile from './components/FamilyProfile';
import WomanIcon from './static/img/icon/womanIcon.png';
import ManIcon from './static/img/icon/manIcon.png';

function App() {
    const nameStyle = {
        'font-weight': 'bold',
        'font-size': '18px',
    };
    return (
        <div className="App">
            <Confetti
                height={2000}
                numberOfPieces="50"
                friction={0.96}
                initialVelocityX={60}
                // colors={['#FF0000']}
                opacity={0.4}
            />
            <TopNavigator />
            <img src={mainImg} className="main-image" id="main" alt="logo" />
            <p>
                <img src={ManIcon} className="prefixIcon" />
                <b>윤재순</b>, <b>최옥자</b>의 아들 <span className="name">상렬</span>
            </p>
            <p>
                <img src={WomanIcon} className="prefixIcon" />
                <b>문기현</b>, <b>한은경</b>의 딸 <span className="name">은비</span>
            </p>
            <WeddingDate />
            <KakaoMap />
            <FamilyProfile />
            <KakaoShare />
        </div>
    );
}

export default App;
