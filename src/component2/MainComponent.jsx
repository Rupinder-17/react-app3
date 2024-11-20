import React from 'react'
import { TodoAdd } from './TodoAdd'
// import { DeleteTodo } from './DeleteTodo'
import { useAddTodo } from '@/hooks/useAddTodo'
import { useDeletedTodo } from '@/hooks/useDeleteTodo';
import { DeletedTodoItems } from './DeleteTodo';

export const MainComponent = () => {
  const [addTodo, AddTodoList, DeleteTodo] = useAddTodo();
  const [addDeleteTodos, AdddeletedItems, RestoreTodos] = useDeletedTodo()

   const handleAdd = (input) => {
    console.log("hello");
    
     if (input.trim() !== "") {
       AddTodoList(input);
      //  setInput("");
      AdddeletedItems(input)
     }
   };
   const handleDelete = (id) => {
     DeleteTodo(id);
   };
   const RestoreFunction = (id)=>{
    RestoreTodos(id)
   }
  return (
    <div>
      <TodoAdd
        onpress={handleAdd}
        addTodo={addTodo}
        onpressDelete={handleDelete}
      />
      <DeletedTodoItems onRestoreClick={RestoreFunction} addDeleteTodos={addDeleteTodos}/>
    </div>
  );
}
