import {Row, Col} from 'antd';
import timedata from '../json/timedata.json'


export default function BusStatus(){
    return(
        <div>
            {timedata.map(busTime =>(
                <div
                className=""
                >
                    
                </div>
            ))}
        </div>
    );
}