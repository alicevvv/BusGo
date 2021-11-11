import {Row, Col} from 'antd';

export default function Announce() {
    return (
        <Row>
            <Col span={12}></Col>
            <Col span={12} className="bg-light">
                <p>公告</p>
            </Col>
        </Row>
    );
}