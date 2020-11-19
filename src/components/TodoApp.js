import React from 'react'
import NewItem from './NewItem'
import Todo from './Todo'

export default class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        'Get Groceries',
        'Feed Cat',
        'Code Website'
      ]
    }
  }

  addItem(item) {
    console.log(item)
  }

  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <NewItem addItem={this.addItem} />
        <ul>
          {this.state.list.map((item) => {
            return <Todo item={item} />
          })}
        </ul>
      </div>
    )
  }
}