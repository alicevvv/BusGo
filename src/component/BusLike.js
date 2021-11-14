import {Row, Col, Button, Checkbox} from 'antd';
import timedata from '../json/timedata.json';


export default function BusLike(){
    return(
        <div>
            {timedata.map(busTime =>(
                <div
                className="route_circle_btn_area"
                >
                    <Checkbox className="route_circle_btn" value={busTime.station} onClick=""> {busTime.like}</Checkbox>
                </div>
            ))}
        </div>
    );
}