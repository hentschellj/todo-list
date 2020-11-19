import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
   super(props) 
  }

  render() {
    return (
      <li>
        {this.props.item}
        <button onClick={() => {this.props.onDelete(this.props.todoId)}}>X</button>
      </li>
    )
  }
}