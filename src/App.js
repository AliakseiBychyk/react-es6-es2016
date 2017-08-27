import React, { Component } from 'react'
import { Container, Column, Row, RuleInput,
  RuleLabel, StyleInput, Button, Document,
  Markup, Editor } from './styled'
import hljs from 'highlight.js'

class App extends Component {
  state = {
    editor: '',
    name0: '',
    begin0: '',
    end0: '',
    style0: '',
    rules: 1
  }

  handleChange = event => {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  rules = () => {
    let {rules} = this.state
    let array = []
    let fields = ['name', 'begin', 'end']
    for (let i = 0; i < rules; i++) {
      array.push(
        <Row
          key={i}
        >
          <Column>
            {fields.map((field, index) => (
              <Column
                key={index}
              >
                <RuleLabel>
                  {field}
                </RuleLabel>
                <RuleInput
                  value={this.state[`${field}${i}`]}
                  onChange={this.handleChange}
                  name={`${field}${i}`}
                />
              </Column>
            )
            )}
          </Column>
          <StyleInput
            value={this.state[`style${i}`]}
            onChange={this.handleChange}
            name={`style${i}`}
          />
        </Row>
      )
    }
    return array
  }

  newFields = () => {
    this.setState(prevState => {
      let {rules} = prevState
      let fields = ['name', 'begin', 'end', 'style']
      let inputValues = {}
      fields.forEach(field => {
        inputValues = {
          ...inputValues,
          [`${field}${rules}`]: ''
        }
      })
      rules++
      return {
        rules,
        ...inputValues
      }
    })
  }

  convertToMarkup = (text = '') => {
    return {
      __html: hljs.highlightAuto(text).value
    }
  }

  render () {
    let {editor} = this.state
    let {handleChange, newFields, rules, convertToMarkup} = this
    return (
      <Container>
        <Column>
          {rules()}
          <Button
            onClick={newFields}
          >
            New Rule
          </Button>
        </Column>
        <Column>
          <Button>
            Random Text
          </Button>
          <Document>
            <Editor
              name={'editor'}
              value={editor}
              onChange={handleChange}
            />
            <Markup
              dangerouslySetInnerHTML={convertToMarkup(editor)}
            />
          </Document>
        </Column>
      </Container>
    )
  }
}

export default App
