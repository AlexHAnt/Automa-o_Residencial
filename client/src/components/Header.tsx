import React, { useEffect, memo, useState } from "react";
// import { Link } from 'react-router-dom'
import { Layout, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment'


const Header: React.FC = () => {
    const [now, setNow] = useState(moment().format('HH:mm:ss'))
    useEffect((): any => {
        let updateHour = setInterval(() => { setNow(String(moment().format('HH:mm:ss - DD/MM/YYYY'))) }, 1000);
        return () => clearInterval(updateHour);
    }, []);

    return (
        <Layout.Header style={{ height: '50px', background: '#000000' }} >
            <Row>
                <Col span={21}>
                    {/* <Link to="/">
            <Logo width='12%' />
          </Link> */}
                </Col>
                <Col span={3}>
                    <p style={{ color: '#fff' }}>{now}</p>
                </Col>
            </Row>
        </Layout.Header>
    )
}

export default memo(Header)