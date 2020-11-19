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
  render() {
    return (
      <div>
        Hello
        <NewItem />
        <ul>
          {this.state.list.map((item) => {
            return <Todo item={item} />
          })}
        </ul>
      </div>
    )
  }
}