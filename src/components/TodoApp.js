import React from 'react'
import NewItem from './NewItem'
import Todo from './Todo'

export default class TodoApp extends React.Component {
  render() {
    return (
      <div>
        Hello
        <NewItem />
        <Todo />
      </div>
    )
  }
}