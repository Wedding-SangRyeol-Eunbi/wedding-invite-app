import React from 'react';
import mainImg from './static/img/img02.jpg';
import Confetti from 'react-confetti';
import KakaoShare from './components/KakaoShare';
import WeddingDate from './components/WeddingDate';
import './static/css/App.css';
import TopNavigator from './components/TopNavigator';
import KakaoMap from './components/KakaoMap';

function App() {
    return (
        <div className="App">
            <Confetti
                numberOfPieces="50"
                friction={0.96}
                initialVelocityX={60}
                // colors={['#FF0000']}
                opacity={0.4}
            />
            <TopNavigator />
            <img src={mainImg} className="main-image" id="main" alt="logo" />
            <p>🎉 상렬 ♥️ 은비, 결혼합니다 🎉</p>
            <WeddingDate />
            <KakaoMap />
            <KakaoShare />
        </div>
    );
}

export default App;
