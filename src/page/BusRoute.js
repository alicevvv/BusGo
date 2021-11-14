import {Layout, Row, Col,Input,Space, Typography, List, Avatar, Divider,Button,Radio,Table} from 'antd';
import AppHeader from '../component/header';
import AppFooter from '../component/footer';
import BusTime from '../component/BusTime';
import BusStation from '../component/BusStation';
const {Header, Content, Footer} = Layout;
const { Search } = Input;
const { Title } = Typography;

export default function BusRoute() {
    return (
        <Layout>
            <Header>
                <AppHeader/>
            </Header>
            <Content>
                <Row className="height-80">
                    <Col span={3} className="bg-white"></Col>
                    <Col span={6} className="bg-white" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <Divider orientation="left">搜尋公車路線</Divider>
                            <Search placeholder="輸入公車路線/站牌" value="932" id="route_input" style={{ width: "100%",fontSize: 16,color: '#1890ff'}}/>
                            <div class="font-normal" style={{marginTop:'60px'}}>FAD-061</div>
                            <div  style={{marginTop:'20px'}}>
                                <img src="./img/bus.svg"></img>
                            </div>
                            <div class="font-normal" style={{marginTop:'60px'}}>公車擁擠度：普通</div>
                            <div  style={{marginTop:'20px'}}>
                                <img src="./img/bus_status.svg"></img>
                            </div>
                    </Col>
                    <Col span={3} className="bg-white"></Col>
                    <Col span={2} className="bg-light"></Col>
                    <Col span={8} className="bg-light" style={{display:'flex',flexDirection:'column'}}>
                        <div class="font-normal" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'60px'}} >
                            <span className="font-normal" style={{fontSize:'24px'}}>932路線</span>
                            <Radio.Group name="directionRadioGroup" defaultValue={0}>
                                <Space direction="vertical">
                                    <Radio value={0}>往三峽北大社區</Radio>
                                    <Radio value={1}>往板橋公車站</Radio>
                                </Space>
                            </Radio.Group>
                        </div>
                        <div style={{marginTop:'40px',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'baseline'}}>
                            <BusTime/>
                            <BusStation/>
                        </div>
                    </Col>
                    <Col span={2} className="bg-light"></Col>
                </Row>
            </Content>
            <Footer>
                <AppFooter/>
            </Footer>
        </Layout>
    );
}