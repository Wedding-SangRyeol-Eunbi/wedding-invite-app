import '../static/css/TopNavigator.css';

function TopNavigator() {
    const dash = <span className="dash">|</span>;
    return (
        <div id="topNavigatorDiv">
            <a href="#main">상렬 ♥️ 은비</a>
            {dash}
            <a href="#kakaoMapDiv">오시는길</a>
            {dash}
            <a href="#kakaoMapDiv">연락처</a>
        </div>
    );
}

export default TopNavigator;
