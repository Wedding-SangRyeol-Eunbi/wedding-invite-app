import React from 'react';
import mainImg from './static/image/main_image.jpg';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import './App.css';

const testPageAlert = () => {
    alert('개발중인 페이지입니다...');
    return false;
};
function App() {
    const {width, height} = useWindowSize();

    return (
        <div className="App">
            <Confetti
                width={width}
                height={height}
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
        </div>
    );
}

export default App;
