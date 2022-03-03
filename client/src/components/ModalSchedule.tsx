import React, { useState, useEffect } from 'react';
import { Col, Form, Row, Checkbox, TimePicker, Button, Modal } from 'antd';
import moment from 'moment'
// import apiAxios from '../components/ApiAxios';

interface IProps {
  modelIsVisible: boolean
  title: string
  onCancelModel: Function,
  onFinishForm: Function
}

interface DataSchedule {
  dayOfWeek: string
  hourFinal: string
  hourInitial: string
}


const ModalSchedule: React.FC<IProps> = (props: any) => {
  const [data, setData] = useState<Array<DataSchedule>>([])
  const [format] = useState<string>('HH:mm')
  const [layout] = useState<object>({
    labelCol: { span: 6 },
    wrapperCol: { span: 20 },
    align: 'center'
  })

  useEffect(() => {
    // loadData()
  }, [])

//   async function loadData() {
//     const { data } = await apiAxios.get(`/stateScheduleSB1`)
//     setData(data)
//   }

  function initialValues(index: number, hour: string) {
    if (hour === 'hourInitial') {
      return data.length > 0 ? data[index].hourInitial !== '' ? moment(data[index].hourInitial, format) : '' : ''
    }
    if (hour === 'hourFinal') {
      return data.length > 0 ? data[index].hourFinal !== '' ? moment(data[index].hourFinal, format) : '' : ''
    }
  }

  return (
    <div>
      <Modal
        visible={props.modelIsVisible}
        title={props.title}
        onCancel={props.onCancelModel}
        footer={[]}
      >
        <Form
          {...layout}
          onFinish={props.onFinishForm}
          initialValues={{
            sundayInitial: initialValues(0, 'hourInitial'),
            sundayFinal: initialValues(0, 'hourFinal'),
            mondayInitial: initialValues(1, 'hourInitial'),
            mondayFinal: initialValues(1, 'hourFinal'),
            tuesdayInitial: initialValues(2, 'hourInitial'),
            tuesdayFinal: initialValues(2, 'hourFinal'),
            wednesdayInitial: initialValues(3, 'hourInitial'),
            wednesdayFinal: initialValues(3, 'hourFinal'),
            thursdayInitial: initialValues(4, 'hourInitial'),
            thursdayFinal: initialValues(4, 'hourFinal'),
            fridayInitial: initialValues(5, 'hourInitial'),
            fridayFinal: initialValues(5, 'hourFinal'),
            saturdayInitial: initialValues(6, 'hourInitial'),
            saturdayFinal: initialValues(6, 'hourFinal'),
          }}
        >
          <Row>
            <Col span={7}></Col>
            <Col span={6}>
              <strong>Liga</strong>
            </Col>
            <Col span={7}>
              <strong>Desliga</strong>
            </Col>
          </Row>

          <Row>
            <Col span={7}>
              <Form.Item name="sunday" valuePropName="checked">
                <Checkbox>Domingo</Checkbox>
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="sundayInitial" >
                <TimePicker
                  placeholder='Hora Inicial'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="sundayFinal" >
                <TimePicker
                  placeholder='Hora Final'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row  >
            <Col span={7}>
              <Form.Item name="monday" valuePropName="checked">
                <Checkbox>Segunda</Checkbox>
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="mondayInitial" >
                <TimePicker
                  placeholder='Hora Inicial'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="mondayFinal" >
                <TimePicker
                  placeholder='Hora Final'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row >
            <Col span={7}>
              <Form.Item name="tuesday" valuePropName="checked">
                <Checkbox>Terça</Checkbox>
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="tuesdayInitial" >
                <TimePicker
                  placeholder='Hora Inicial'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="tuesdayFinal" >
                <TimePicker
                  placeholder='Hora Final'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={7}>
              <Form.Item name="wednesday" valuePropName="checked">
                <Checkbox>Quarta</Checkbox>
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="wednesdayInitial" >
                <TimePicker
                  placeholder='Hora Inicial'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="wednesdayFinal" >
                <TimePicker
                  placeholder='Hora Final'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={7}>
              <Form.Item name="thursday" valuePropName="checked">
                <Checkbox>Quinta</Checkbox>
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="thursdayInitial" >
                <TimePicker
                  placeholder='Hora Inicial'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="thursdayFinal" >
                <TimePicker
                  placeholder='Hora Final'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={7}>
              <Form.Item name="friday" valuePropName="checked">
                <Checkbox>Sexta</Checkbox>
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="fridayInitial" >
                <TimePicker
                  placeholder='Hora Inicial'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="fridayFinal" >
                <TimePicker
                  placeholder='Hora Final'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={7}>
              <Form.Item name="saturday" valuePropName="checked">
                <Checkbox>Sábado</Checkbox>
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="saturdayInitial" >
                <TimePicker
                  placeholder='Hora Inicial'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="saturdayFinal" >
                <TimePicker
                  placeholder='Hora Final'
                  size="small"
                  format={format}
                />
              </Form.Item>
            </Col>

          </Row>
          <Button type="primary" htmlType="submit"> Confirmar </Button>
        </Form>
      </Modal>
    </div >
  )
}
export default ModalSchedule