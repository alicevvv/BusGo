import React from "react";
import{
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
}from'./Index';


export default function AppHeader(){
    return(
        <>
        <Nav>
            <NavLink to="/">
             <h1 style={{color:' #ffffff'}}>Bus Go! 公車動態應用系統</h1>
             </NavLink>
             <Bars />
             <NavMenu>
                 <NavLink to="/about" activeStyle>
                     最新公告
                 </NavLink>
                 <NavLink to="/Service" activeStyle>
                    附近站牌
                 </NavLink>
                 <NavLink to="/Contact Us" activeStyle>
                     路線規劃
                 </NavLink>
                 <NavLink to="/Sing Up" activeStyle>
                     乘客服務
                 </NavLink>
             </NavMenu>
             <NavBtn>
               <NavBtnLink to="/singin"> 會員登入</NavBtnLink>  
             </NavBtn>
        </Nav>
        </>
    );
};
