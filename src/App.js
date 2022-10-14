import mainImg from './static/image/main_image.jpg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={mainImg} className="App-logo" alt="logo" onClick="alert(11);" />
                <p>🎉 상렬 그리고 은비, 결혼합니다 🎉</p>
            </header>
        </div>
    );
}

export default App;
