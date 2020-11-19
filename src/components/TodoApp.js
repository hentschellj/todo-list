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
        {this.state.list.map((item) => {
          return <div>{item}</div>;
        })}
        <Todo />
      </div>
    )
  }
}