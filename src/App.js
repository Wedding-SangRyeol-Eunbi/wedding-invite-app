import React from 'react';
import mainImg from './static/img/main_image.jpg';
import Confetti from 'react-confetti';
import KakaoShare from './components/KakaoShare';
import WeddingDate from './components/WeddingDate';
import './static/css/App.css';

const testPageAlert = () => {
    alert('개발중인 페이지입니다...');
    return false;
};

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
            <a href="#" onClick={testPageAlert}>
                <img src={mainImg} className="main-image" alt="logo" />
            </a>
            <p>🎉 상렬 ♥️ 은비, 결혼합니다 🎉</p>
            <WeddingDate />
            <KakaoShare />
        </div>
    );
}

export default App;
