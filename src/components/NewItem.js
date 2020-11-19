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
        {this.state.text}
        <input onChange={this.updateText} type="text" />
        <button>Add Item</button>
      </div>
    )
  }
}