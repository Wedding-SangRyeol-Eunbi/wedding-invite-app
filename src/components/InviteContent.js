import WomanIcon from '../static/img/icon/womanIcon.png';
import ManIcon from '../static/img/icon/manIcon.png';

function InviteContent() {
    return (
        <div style={{marginTop: 0}}>
            <div className="weddingDate">2023.01.15 (일) 14시</div>
            <div className="greetingMessage">
                <span>
                    2023년 첫 달, 우리들의 세 번째 겨울
                    <br />
                    문은비 그리고 윤상렬 결혼합니다.
                    <br />
                    <br />
                    새로운 해가 시작되는 1월,
                    <br />
                    저희 둘의 첫걸음을 내디디려 합니다.
                    <br />
                    여러분들의 격려와 축복으로
                    <br />
                    저희 앞날을 빛내어 주시기 바랍니다.
                </span>
            </div>
            <hr />
            <div className="parentsName">
                <p>
                    <img src={ManIcon} className="prefixIcon" />
                    <span className="name">윤재순, 최옥자</span>의 아들{' '}
                    <span className="name">상렬</span>
                </p>
                <p>
                    <img src={WomanIcon} className="prefixIcon" />
                    <span className="name">문기현, 한은경</span>의 딸{' '}
                    <span className="name">은비</span>
                </p>
            </div>
            <hr />
        </div>
    );
}

export default InviteContent;
