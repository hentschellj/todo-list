import React from 'react'

export default class NewItem extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }

    this.updateText = this.updateText.bind(this);
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input value={ this.state.text } onChange={ this.updateText } type="text" />
        <button onClick={() => {
          this.props.addItem(this.state.text)
          this.setState({ text: '' })
        }}
        >Add Item</button>
      </div>
    )
  }
}