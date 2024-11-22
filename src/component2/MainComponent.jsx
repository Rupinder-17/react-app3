import React from "react";
import { TodoAdd } from "./TodoAdd";
// import { DeleteTodo } from './DeleteTodo'
import { useAddTodo } from "@/hooks/useAddTodo";
import { useDeletedTodo } from "@/hooks/useDeleteTodo";
import { DeletedTodoItems } from "./DeleteTodo";

export const MainComponent = () => {
  const [addTodo, addTodoList, deleteTodo] = useAddTodo();
  const [addDeleteTodos, adddeletedItems, restoreTodos , permenentDelete] = useDeletedTodo();

  const handleAdd = (input) => {
    if (input.trim() !== "") {
      addTodoList(input);
    }
  };
  const handleDelete = (item) => {
    deleteTodo(item);
    adddeletedItems(item);
  };
  const restoreFunction = (item, id) => {
    restoreTodos(item, id);
    handleAdd(item.title);
  };
  const handlePermentDelete = (item)=>{
    permenentDelete(item)
  }
  return (
    <div>
      <TodoAdd
        onpress={handleAdd}
        addTodo={addTodo}
        onpressDelete={handleDelete}
      />
      <DeletedTodoItems
        onRestoreClick={restoreFunction}
        addDeleteTodos={addDeleteTodos}
        onDeletePermanent = {handlePermentDelete}
      />
    </div>
  );
};
