import mainImg from './static/image/main_image.jpg';
import './App.css';

const showAlert = () => {
    alert('개발중인 페이지입니다...');
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <a href="return false;" onClick={showAlert}>
                    <img src={mainImg} className="App-logo" alt="logo" />
                </a>
                <p>🎉 상렬 그리고 은비, 결혼합니다 🎉</p>
            </header>
        </div>
    );
}

export default App;
