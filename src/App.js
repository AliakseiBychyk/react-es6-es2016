import React, { Component } from 'react'
import {Container, Column, Row, RuleInput,
  RuleLabel, StyleInput, Button, Document,
  Markup, Editor} from './styled'

class App extends Component {
  render () {
    return (
      <Container>
        <Column>
          <Button>
            New Rule
          </Button>
        </Column>
        <Column>
          <Button>
            Random Text
          </Button>
          <Document>
            <Editor />
            <Markup />
          </Document>
        </Column>
      </Container>
    )
  }
}

export default App
