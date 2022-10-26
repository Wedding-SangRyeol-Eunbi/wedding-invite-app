import '../static/css/TopNavigator.css';

function TopNavigator() {
    const dash = <span className="dash">|</span>;
    return (
        <div>
            <div id="topNavigatorDiv">
                <a href="#root">상렬 ♥️ 은비</a>
                {dash}
                <a href="#kakaoMapDiv">오시는길</a>
                {dash}
                <a href="#familyProfileDiv">연락처</a>
            </div>

            <div id="bottomNavigatorDiv">Copyright 2022, All rights reserved by 상렬&은비</div>
        </div>
    );
}

export default TopNavigator;
