// Libraries
import React, { Component } from 'react'
import { Card, Row, Col, Modal, Button, Select } from 'antd'

// HOC
import { withApollo } from 'react-apollo'
import App from './App'

class AppointmentQuestions extends Component {
  state = {
    isAppointmentQuestionOpen: true,
  }

  componentDidMount() {}

  loadInformation = async () => {}

  loadQuestionnaireAnswers = async () => {}

  handleOpenAppointmentQuestionsModal = () => {
    console.log('Opening modal')
    this.setState({ isAppointmentQuestionOpen: true })
  }

  handleCloseAppointmentQuestionsModal = () => {
    this.setState({ isAppointmentQuestionOpen: false })
  }

  render() {
    const { Option } = Select
    return (
      <div>
        <Modal
          visible={this.state.isAppointmentQuestionOpen}
          title={'NuevoCuestionario'}
          onCancel={this.handleCloseAppointmentQuestionsModal}
        >
          <Row>
            <Col span={24}>
              <div>Movilidad</div>
              <Select style={{ width: '100%' }}></Select>
            </Col>
            <Col>
              <div>Cuidado personal</div>
            </Col>
            <Col>
              <div>Actividades Todos los dias</div>
            </Col>
            <Col>
              <div>Dolor/malestar</div>
            </Col>
            <Col>
              <div>Ansiedad/depresion</div>
            </Col>
            <Col>
              <div>Su estado de salud hoy es</div>
            </Col>
          </Row>
        </Modal>
        <Button onClick={this.handleOpenAppointmentQuestionsModal}>Open Modal</Button>
      </div>
    )
  }
}

export default withApollo(AppointmentQuestions)
