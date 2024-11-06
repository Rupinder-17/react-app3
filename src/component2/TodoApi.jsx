import { useTodoApi } from '@/hooks/useTodoApi'
import React from 'react'

export const TodoApi = () => {
    const [todos,loading, error] = useTodoApi()
    console.log("todos",todos);
    
  return (
    <div>
        {loading ?(
        <p>...loadind</p> 
       ):(
        error ?(
            <p>{error.message}</p>
        ):(
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>{todo.title}</li>
                ))}
            </ul>
        )
       ) }
    </div>
  )
}
