import {Row, Col} from 'antd';
import timedata from '../json/timedata.json'


export default function BusTime(){
    return(
        <div className="px-1">
            {timedata.map(busTime =>(
                <div
                key={busTime.title}
                className="badge"
                >
                    {busTime.title}
                </div>
            ))}
        </div>
    );
}