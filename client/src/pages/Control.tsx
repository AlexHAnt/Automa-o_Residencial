import React, { useState, useEffect } from "react";
import IO from "socket.io-client";
import moment from 'moment'
import { Button, Row, Col, Card, Modal, Space } from 'antd';
import { CalendarOutlined, SoundOutlined } from '@ant-design/icons';
import Header from './../components/Header'
import AudioTag from './../components/audio'
import ModalSchedule from "../components/ModalSchedule";
import apiAxios from "../service/ApiAxios";
import { isNull } from 'util';
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

const baseURL: any = process.env.REACT_APP_BASE_URL //URL servidor
const socket = IO(baseURL);


const screenAdjustment: number = window.visualViewport.height - 20//Ajuste automático da altura da tela
// const screenAdjustmentWidth: number = window.visualViewport.width //Ajuste automático da largura da tela

const Control: React.FC = () => {
    const [response, setResponse] = useState([]);
    const [ModalVisibleRele1, setModalVisibleRele1] = useState(false);
    const [ModalVisibleRele2, setModalVisibleRele2] = useState(false);
    const [ModalVisibleRele3, setModalVisibleRele3] = useState(false);
    const [ModalVisibleRele4, setModalVisibleRele4] = useState(false);
    const [ModalVisibleRele5, setModalVisibleRele5] = useState(false);
    const [ModalVisibleRele6, setModalVisibleRele6] = useState(false);
    const [ModalVisibleRele7, setModalVisibleRele7] = useState(false);
    const [ModalVisibleRele8, setModalVisibleRele8] = useState(false);

    const [music, setmusic] = useState('')
    const [allMusic, setAllMusic] = useState([])
    const [modalVisibleMusic, setModalVisibleMusic] = useState(false)



    useEffect((): any => {
        socket.on('chat', (resp) => (setResponse(resp)))
        return () => socket.off('chat', (resp) => (setResponse(resp)))
    }, []);

    function testeOn(x: string) {
        socket.emit(x, {
            id: 2,
            comand: 1
        })
    }

    function testeOff(x: string) {
        socket.emit(x, {
            id: 2,
            comand: 0
        })
    }
    function updateSchedule(value: any, dayOfweek: string, numberDayOfweek: number, hourInitial: string, hourFinal: string, reqScheduleName: string) {
        if (!!value[dayOfweek]) {
            apiAxios.put(`/${reqScheduleName}/${numberDayOfweek}`, {
                hourInitial: hourInitial,
                hourFinal: hourFinal
            })
                .then((err) => console.log(err))
                .catch((err) => console.log(err))
        }
    }

    function ModalOk(value: any, reqScheduleName: string) {
        let sundayInitial = isNull(value.sundayInitial) || value.sundayInitial === '' ? '' : moment(value.sundayInitial).format('HH:mm')
        let sundayFinal = isNull(value.sundayFinal) || value.sundayFinal === '' ? '' : moment(value.sundayFinal).format('HH:mm')
        let mondayInitial = isNull(value.mondayInitial) || value.mondayInitial === '' ? '' : moment(value.mondayInitial).format('HH:mm')
        let mondayFinal = isNull(value.mondayFinal) || value.mondayFinal === '' ? '' : moment(value.mondayFinal).format('HH:mm')
        let tuesdayInitial = isNull(value.tuesdayInitial) || value.tuesdayInitial === '' ? '' : moment(value.tuesdayInitial).format('HH:mm')
        let tuesdayFinal = isNull(value.tuesdayFinal) || value.tuesdayFinal === '' ? '' : moment(value.tuesdayFinal).format('HH:mm')
        let wednesdayInitial = isNull(value.wednesdayInitial) || value.wednesdayInitial === '' ? '' : moment(value.wednesdayInitial).format('HH:mm')
        let wednesdayFinal = isNull(value.wednesdayFinal) || value.wednesdayFinal === '' ? '' : moment(value.wednesdayFinal).format('HH:mm')
        let thursdayInitial = isNull(value.thursdayInitial) || value.thursdayInitial === '' ? '' : moment(value.thursdayInitial).format('HH:mm')
        let thursdayFinal = isNull(value.thursdayFinal) || value.thursdayFinal === '' ? '' : moment(value.thursdayFinal).format('HH:mm')
        let fridayInitial = isNull(value.fridayInitial) || value.fridayInitial === '' ? '' : moment(value.fridayInitial).format('HH:mm')
        let fridayFinal = isNull(value.fridayFinal) || value.fridayFinal === '' ? '' : moment(value.fridayFinal).format('HH:mm')
        let saturdayInitial = isNull(value.saturdayInitial) || value.saturdayInitial === '' ? '' : moment(value.saturdayInitial).format('HH:mm')
        let saturdayFinal = isNull(value.saturdayFinal) || value.saturdayFinal === '' ? '' : moment(value.saturdayFinal).format('HH:mm')

        updateSchedule(value, 'sunday', 1, sundayInitial, sundayFinal, reqScheduleName) //Domingo
        updateSchedule(value, 'monday', 2, mondayInitial, mondayFinal, reqScheduleName) //Segunda
        updateSchedule(value, 'tuesday', 3, tuesdayInitial, tuesdayFinal, reqScheduleName) //Terça
        updateSchedule(value, 'wednesday', 4, wednesdayInitial, wednesdayFinal, reqScheduleName) //Quarta
        updateSchedule(value, 'thursday', 5, thursdayInitial, thursdayFinal, reqScheduleName) //Quinta
        updateSchedule(value, 'friday', 6, fridayInitial, fridayFinal, reqScheduleName) //Sexta
        updateSchedule(value, 'saturday', 7, saturdayInitial, saturdayFinal, reqScheduleName) //Sábado
    }

    function teste(musicName) {
        setmusic(musicName)
        setModalVisibleMusic(false)
    }

    function getAllMusic() {
        setModalVisibleMusic(true)
        apiAxios.get(`/audio`)
            .then((resp) => {
                setAllMusic(resp.data)
            })
            .catch((err) => console.log(err))
    }


    function buttonPlans() {
        return allMusic.map((n) => {
            return (
                <>
                    <li> <Button onClick={() => teste(n)}>{n}</Button> </li>
                    {/* <Space size={'large'} /> */}
                    <br />
                </>
            )
        })
    }

    return (
        <div style={{ backgroundColor: '#ffffff', color: '#ffffff' }}>
            <Header />
            <Modal
                visible={modalVisibleMusic}
                title={'Musics'}
                onCancel={() => setModalVisibleMusic(false)}
                style={{ textAlign: 'center' }}
                footer={[]}
                width='600px'
            >
                {buttonPlans()}
            </Modal>
 
            <Col style={{ textAlign: 'center' }} >
                <br />
                <Button onClick={() => getAllMusic()}><SoundOutlined />Musics</Button>
                <h3>{music}</h3>
                <AudioTag music={music} />
                <Row justify='center' gutter={[16, 24]}>
                    <Col>
                        <Card bordered={false} title='Quarto' size="small" style={{ width: 300, backgroundColor: '#f2f2f2' }} >
                            <Space>
                                <Button type='text' style={{ background: '#1ab2ff', color: '#ffffff' }} onClick={() => testeOn('porta1')}>On</Button>
                                <Button type='link' shape="circle" icon={<CalendarOutlined />} onClick={() => setModalVisibleRele1(true)} style={{ background: '#ffffff', color: '#000000' }} />
                                <Button type='text' style={{ background: '#ff0000', color: '#ffffff' }} onClick={() => testeOff('porta1')}>Off</Button>
                                <ModalSchedule
                                    onFinishForm={(e: any) => ModalOk(e, 'stateSchedulRele1')}
                                    modelIsVisible={ModalVisibleRele1}
                                    title="Agendamento"
                                    onCancelModel={() => setModalVisibleRele1(false)}
                                />
                            </Space>
                        </Card>
                    </Col>
                    <Col>
                        <Card bordered={false} title='Quarto' size="small" style={{ width: 300, backgroundColor: '#f2f2f2' }}>
                            <Space>
                                <Button type='text' style={{ background: '#1ab2ff', color: '#ffffff' }} onClick={() => testeOn('porta2')}>On</Button>
                                <Button type='link' shape="circle" icon={<CalendarOutlined />} onClick={() => setModalVisibleRele2(true)} style={{ background: '#ffffff', color: '#000000' }} />
                                <Button type='text' style={{ background: '#ff0000', color: '#ffffff' }} onClick={() => testeOff('porta2')}>Off</Button>
                                <ModalSchedule
                                    onFinishForm={(e: any) => ModalOk(e, 'stateSchedulRele2')}
                                    modelIsVisible={ModalVisibleRele2}
                                    title="Agendamento"
                                    onCancelModel={() => setModalVisibleRele2(false)}
                                />
                            </Space>
                        </Card>
                    </Col>
                </Row>
            </Col>

            <Col style={{ textAlign: 'center' }} >
                <Row justify='center' gutter={[16, 24]}>
                    <Col>
                        <Card bordered={false} title='Quarto Visita' size="small" style={{ width: 300, backgroundColor: '#f2f2f2' }}>
                            <Space>
                                <Button type='text' style={{ background: '#1ab2ff', color: '#ffffff' }} onClick={() => testeOn('porta3')}>On</Button>
                                <Button type='link' shape="circle" icon={<CalendarOutlined />} onClick={() => setModalVisibleRele3(true)} style={{ background: '#ffffff', color: '#000000' }} />
                                <Button type='text' style={{ background: '#ff0000', color: '#ffffff' }} onClick={() => testeOff('porta3')}>Off</Button>
                                <ModalSchedule
                                    onFinishForm={(e: any) => ModalOk(e, 'stateSchedulRele3')}
                                    modelIsVisible={ModalVisibleRele3}
                                    title="Agendamento"
                                    onCancelModel={() => setModalVisibleRele3(false)}
                                />
                            </Space>
                        </Card>
                    </Col>
                    <Col>
                        <Card bordered={false} title='Sala' size="small" style={{ width: 300, backgroundColor: '#f2f2f2' }}>
                            <Space>
                                <Button type='text' style={{ background: '#1ab2ff', color: '#ffffff' }} onClick={() => testeOn('porta4')}>On</Button>
                                <Button type='link' shape="circle" icon={<CalendarOutlined />} onClick={() => setModalVisibleRele4(true)} style={{ background: '#ffffff', color: '#000000' }} />
                                <Button type='text' style={{ background: '#ff0000', color: '#ffffff' }} onClick={() => testeOff('porta4')}>Off</Button>
                                <ModalSchedule
                                    onFinishForm={(e: any) => ModalOk(e, 'stateSchedulRele4')}
                                    modelIsVisible={ModalVisibleRele4}
                                    title="Agendamento"
                                    onCancelModel={() => setModalVisibleRele4(false)}
                                />
                            </Space>
                        </Card>
                    </Col>
                </Row>
            </Col>

            <Col style={{ textAlign: 'center' }} >
                <Row justify='center' gutter={[16, 24]}>
                    <Col>
                        <Card bordered={false} title='Cozinha' size="small" style={{ width: 300, backgroundColor: '#f2f2f2' }}>
                            <Space>
                                <Button type='text' style={{ background: '#1ab2ff', color: '#ffffff' }} onClick={() => testeOn('porta5')}>On</Button>
                                <Button type='link' shape="circle" icon={<CalendarOutlined />} onClick={() => setModalVisibleRele5(true)} style={{ background: '#ffffff', color: '#000000' }} />
                                <Button type='text' style={{ background: '#ff0000', color: '#ffffff' }} onClick={() => testeOff('porta5')}>Off</Button>
                                <ModalSchedule
                                    onFinishForm={(e: any) => ModalOk(e, 'stateSchedulRele5')}
                                    modelIsVisible={ModalVisibleRele5}
                                    title="Agendamento"
                                    onCancelModel={() => setModalVisibleRele5(false)}
                                />
                            </Space>
                        </Card>
                    </Col>
                    <Col>
                        <Card bordered={false} title='Área Externa' size="small" style={{ width: 300, backgroundColor: '#f2f2f2' }}>
                            <Space>
                                <Button type='text' style={{ background: '#1ab2ff', color: '#ffffff' }} onClick={() => testeOn('porta6')}>On</Button>
                                <Button type='link' shape="circle" icon={<CalendarOutlined />} onClick={() => setModalVisibleRele6(true)} style={{ background: '#ffffff', color: '#000000' }} />
                                <Button type='text' style={{ background: '#ff0000', color: '#ffffff' }} onClick={() => testeOff('porta6')}>Off</Button>
                                <ModalSchedule
                                    onFinishForm={(e: any) => ModalOk(e, 'stateSchedulRele6')}
                                    modelIsVisible={ModalVisibleRele6}
                                    title="Agendamento"
                                    onCancelModel={() => setModalVisibleRele6(false)}
                                />
                            </Space>
                        </Card>
                    </Col>
                </Row>
            </Col>

            <Col style={{ textAlign: 'center' }} >
                <Row justify='center' gutter={[16, 24]}>
                    <Col>
                        <Card bordered={false} title='Garagem' size="small" style={{ width: 300, backgroundColor: '#f2f2f2' }}>
                            <Space>
                                <Button type='text' style={{ background: '#1ab2ff', color: '#ffffff' }} onClick={() => testeOn('porta7')}>On</Button>
                                <Button type='link' shape="circle" icon={<CalendarOutlined />} onClick={() => setModalVisibleRele7(true)} style={{ background: '#ffffff', color: '#000000' }} />
                                <Button type='text' style={{ background: '#ff0000', color: '#ffffff' }} onClick={() => testeOff('porta7')}>Off</Button>
                                <ModalSchedule
                                    onFinishForm={(e: any) => ModalOk(e, 'stateSchedulRele7')}
                                    modelIsVisible={ModalVisibleRele7}
                                    title="Agendamento"
                                    onCancelModel={() => setModalVisibleRele7(false)}
                                />
                            </Space>
                        </Card>
                    </Col>
                    <Col>
                        <Card bordered={false} title='Quarto' size="small" style={{ width: 300, backgroundColor: '#f2f2f2' }}>
                            <Space>  <Button type='text' style={{ background: '#1ab2ff', color: '#ffffff' }} onClick={() => testeOn('porta8')}>On</Button>
                                <Button type='link' shape="circle" icon={<CalendarOutlined />} onClick={() => setModalVisibleRele8(true)} style={{ background: '#ffffff', color: '#000000' }} />
                                <Button type='text' style={{ background: '#ff0000', color: '#ffffff' }} onClick={() => testeOff('porta8')}>Off</Button>
                                <ModalSchedule
                                    onFinishForm={(e: any) => ModalOk(e, 'stateSchedulRele8')}
                                    modelIsVisible={ModalVisibleRele8}
                                    title="Agendamento"
                                    onCancelModel={() => setModalVisibleRele8(false)}
                                />
                            </Space>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default Control