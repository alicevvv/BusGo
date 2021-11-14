import {Row, Col} from 'antd';
import timedata from '../json/timedata.json'
function isComing(timing){
    
}


export default function BusTime(){
    return(
        <div className="px-1">
            {timedata.map(busTime =>{
                return busTime.title === "進站中"?
                (
                    <div
                    key={busTime.title}
                    className="badge"
                    style={{backgroundColor:'var(--yellow)'}}
                    >
                        {busTime.title}
                    </div>
                )
                :(
                    <div
                    key={busTime.title}
                    className="badge"
                    style={{backgroundColor:'var(--deep-gray)'}}
                    >
                        {busTime.title}
                    </div>
                )
            })}
        </div>
    );
}