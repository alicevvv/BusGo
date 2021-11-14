import {Row, Col} from 'antd';
import timedata from '../json/timedata.json'


export default function BusStatus(){

    return(
        <div className="px-1" style={{marginLeft:'16px'}}>
            {timedata.map(busTime =>{
                return busTime.title === "進站中" ?
                    <div
                    value={busTime.title}
                    style={{height:'40px',marginBottom:'16px'}}
                    >
                        <span><img src="./img/status_yellow.svg"></img></span>
                    </div>
                :<div style={{height:'40px',marginBottom:'16px'}}></div>
            }
                )}
        </div>
    );
}