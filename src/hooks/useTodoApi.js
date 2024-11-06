import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const useTodoApi = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(()=>{
    console.log("hello");
    getTodos()
  },[])
  
  const getTodos = async()=>{
    setLoading(true)
    try{
        const response = await fetch("https://api.freeapi.app/api/v1/todos");
        let res = await response.json() 
        setTodos(res?.data?.data|| [])
        console.log("data", res);
    }catch(e){
      setError(e)
        // console.log(e);
    } 
    finally{
      setLoading(false)
    }
  }
  return [todos, loading,error]
}
