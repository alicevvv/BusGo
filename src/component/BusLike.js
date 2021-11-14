import {Row, Col, Button, Checkbox} from 'antd';
import { createContext,useState,useContext } from "react";
import timedata from '../json/timedata.json';
import { StoreContext } from '../store/index';


export default function BusLike(){
    const { state:{count }} = useContext(StoreContext);
    const [likeCount,setLikeCount] = useState(0);
    const { dispatch } = useContext(StoreContext);
    const checked = (e) =>{
        if (e.target.checked === true) {
            dispatch({type: 'increment'});
            setLikeCount(likeCount+1);
        }else{
            dispatch({type: 'decrement'})
            setLikeCount(likeCount-1);
        }
    }

    return(
        <div>
            {timedata.map(busTime =>(
                <div
                className="route_circle_btn_area"
                >
                    <Checkbox className="route_circle_btn" value={busTime.station} onChange={checked}> {busTime.like}</Checkbox>
                </div>
            ))}
        </div>
    );
}