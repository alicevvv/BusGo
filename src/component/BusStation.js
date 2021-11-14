import {Row, Col} from 'antd';
import timedata from '../json/timedata.json'


export default function BusStation(){
    return(
        <div>
            {timedata.map(busTime =>(
                <div
                className="stationName"
                >
                    {busTime.station}
                </div>
            ))}
        </div>
    );
}