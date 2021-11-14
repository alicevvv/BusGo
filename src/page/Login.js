import {Layout, Row, Col,Input,Space, Typography, Radio, Button,Checkbox} from 'antd';
import AppHeader from '../component/header';
import AppFooter from '../component/footer';
import news from '../json/news.json';
const {Header, Content, Footer} = Layout;
const { Search } = Input;
const { Title } = Typography;

const newsUrl = 'https://ptx.transportdata.tw/MOTC/v2/PTX/Web/News?$top=6&$format=JSON';
function clickRemember(){
    var element = document.getElementsByClassName('ant-radio');
    if(element.classList.contains('ant-radio')){
        console.log('is checked');
        // element.classList.remove('ant-radio-checked');
    }else{
        console.log('unchecked');
        // element.classList.add('ant-radio-checked');
    }
}

export default function Login() {
    return (
        <Layout>
            <Header>
                <AppHeader/>
            </Header>
            <Content>
                <Row className="" style={{maxHeight:'calc(100vh - 64px)'}}>
                    <Col span={12} className="bg-white">
                        <div style={{width:'100%',height:'calc(100vh - 64px)',objectFit:'cover'}}>
                            <img src="./img/member_banner.svg" style={{width:'100%',height:'calc(100vh - 64px)',objectFit:'cover'}}/>
                        </div>
                    </Col>
                    <Col span={3} className="bg-light"></Col>
                    <Col span={6} className="bg-light" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <img src="./img/logo.svg" style={{marginBottom:'1em'}}/>
                        <span className="loginInputs">
                            <Input placeholder="帳號 / username"/>
                            <Input placeholder="密碼 / password"/>
                        </span>
                        <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'baseline'}}>
                            <Checkbox className="font-normal">記住我 Remember me </Checkbox>
                            <Button type="text" style={{fontWeight:'bold'}}>忘記密碼?</Button>
                        </div>
                        <Button className="btn-main hover-border" style={{width:'100%',height:'60px',marginTop:'1rem'}}>
                            <span className="font-normal">登入會員</span></Button>
                    </Col>
                    <Col span={3} className="bg-light"></Col>
                </Row>
            </Content>
        </Layout>
    );
}