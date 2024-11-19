import React from 'react'
import { TodoAdd } from './TodoAdd'
import { DeleteTodo } from './DeleteTodo'

export const MainComponent = () => {
  return (
    <div>MainComponent
      <TodoAdd/>
      <DeleteTodo/>
    </div>
  )
}
