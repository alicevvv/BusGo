
export default function AppHeader(){
    return(
        <div>
            <h1 style={{color:' #ffffff'}}>Bus Go! 公車動態應用系統</h1>
            <div className="header-button-group">
                <div className="header-button">最新公告</div>
                <div className="header-button">附近站牌</div>
                <div className="header-button">路線規劃</div>
                <div className="header-button">乘客服務</div>
                <div className="header-button">會員登入</div>
            </div>
        </div>
    );
}