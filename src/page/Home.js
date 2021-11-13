import {Layout, Row, Col,Input,Space, Typography, List, Avatar, Divider,Button} from 'antd';
import AppHeader from '../component/header';
import AppFooter from '../component/footer';
import news from '../json/news.json';
const {Header, Content, Footer} = Layout;
const { Search } = Input;
const { Title } = Typography;

const newsUrl = 'https://ptx.transportdata.tw/MOTC/v2/PTX/Web/News?$top=6&$format=JSON';

export default function Home() {
    return (
        <Layout>
            <Header>
                <AppHeader/>
                <Row className="text-white">
                <h1>Bus Go!</h1>
                </Row>
            </Header>
            <Content>
                <Row className="height-80">
                    <Col span={4} className="bg-white"></Col>
                    <Col span={4} className="bg-white" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div>
                            <Divider orientation="left">搜尋公車路線</Divider>
                            <Search placeholder="輸入公車路線/站牌" style={{ width: 295,fontSize: 16,color: '#1890ff'}}/>
                        </div>
                    </Col>
                    <Col span={4} className="bg-white"></Col>
                    <Col span={2} className="bg-light"></Col>
                    <Col span={8} className="bg-light" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <div style={{width:'475px',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'baseline'}}>
                            <Title level={4}>最新公告</Title>
                            <Button type="text">MORE+</Button>
                            {/* <Title level={6}></Title> */}
                        </div>
                        <List
                        bordered
                        dataSource={news} 
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}/>
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