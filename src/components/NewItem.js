import React from 'react'

export default class NewItem extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }

    this.updateText = this.updateText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addItem(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <form>
        <input value={ this.state.text } onChange={ this.updateText } type="text" />
        <input type="submit" value="Add Item" onClick={this.handleSubmit} />
      </form>
    )
  }
}