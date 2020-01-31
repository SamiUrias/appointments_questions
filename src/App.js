import React, { Component } from 'react'
import logo from './logo.svg'
import { Button, Modal, Row, Col } from 'antd'
import './App.css'
import 'antd/dist/antd.css'
import ApolloClient from 'apollo-boost'
import AppointmentQuestions from './AppointmentQuestions'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'https://http://ec2-3-15-235-190.us-east-2.compute.amazonaws.com:4000/dev/graphql',
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <React.Fragment>
          <AppointmentQuestions />
        </React.Fragment>
      </ApolloProvider>
    )
  }
}

export default App
