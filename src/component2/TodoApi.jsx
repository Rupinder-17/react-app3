import { useTodoApi } from '@/hooks/useTodoApi'
import React from 'react'

export const TodoApi = () => {
    const [todos,loading, error] = useTodoApi()
    console.log("todos",todos);
    
  return (
    <div>
      {loading ? (
        <p>...loadind</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <ul className=''>
            <div className='flex gap-3 text-xl justify-around'>

            <li>Title</li>
            <li>Des</li>
            <li>Body</li>
            </div>
          {todos.map((todo, index) => (
            <li key={index} className='flex gap-3 justify-around'>
                {/* <p>{todo._id}</p> */}
              <p>{todo.title}</p>
              <p>{todo.description}</p>
              <p>{todo.isCompleted}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
