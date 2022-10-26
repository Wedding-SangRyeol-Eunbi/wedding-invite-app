import React from 'react';
import mainImg from './static/img/img02_sizing.jpg';
import Confetti from 'react-confetti';
import KakaoShare from './components/KakaoShare';
import WeddingDate from './components/WeddingDate';
import TopNavigator from './components/TopNavigator';
import KakaoMap from './components/KakaoMap';
import FamilyProfile from './components/FamilyProfile';
import InviteContent from './components/InviteContent';

import './static/css/App.css';
import WeddingPhoto from './components/WeddingPhoto';

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
            <InviteContent />
            <WeddingPhoto />
            <WeddingDate />
            <KakaoMap />
            <FamilyProfile />
            <KakaoShare />
        </div>
    );
}

export default App;
