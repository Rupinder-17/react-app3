import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import MyFirstComponent from './MyFirstComponent.jsx'
// import { SecondComponent } from './Components/SecondComponent'
// import Display from './Components/DisplayCOmponents.jsx'
// import { AgeCount } from './Components/AgeCount.jsx'
import { TableDashboard } from './Components/TableDashboard'
import { MultiDeleteitem } from './Components/MultiDeleteitem'
import { ColorsSelect } from './Components/ColorsSelect'
import { UseEffectPractice } from './Components/UseEffectPractice'
import { ColorSelect } from './Components/ColorSelect'
import { UseEffect } from './Components/UseEffect'
import { CustomHook } from './Components/CustomHook'
import { CustomDataHook } from './Components/CustomDataHook'
import { ApiData } from './Components/ApiData'
// import { PostapiData } from './Components/PostapiData'
import { CommonApi } from './Components/CommonApi'
// import { RiderApp } from './Components/RiderApp'
import { PostapiData } from './Components/PostapiData'
import { FreeApiData } from './Components/FreeApiData'
import { Parent } from './Components/Parent'
import ParentComponent from './Components/DemoParent'
import { Pagination } from './Components/Pagination'
import Portfolio from './Components/Portfolio'
// import { CallBackHook } from './Components/CallBackHook'
// import Test from './Components/Test'
import { TodoApi } from './component2/TodoApi'
import ParentData  from './component2/Parent'
import {  UseMemoHook } from './component2/Counter'
import { UseRef } from './component2/UseRef'
import { TimerREf } from './component2/TimerREf'
import { UseReducerHook } from './component2/UseReducerHook'
import { TodoList } from './component2/TodoList'
import { Todolist1 } from './component2/Demo'
import  { CustomTodoList } from './component2/Card'
import { CustomTodoList1 } from './component2/CustomTodoList'
import { MainComponent } from './component2/MainComponent'
// import { AutocompleteExample } from './Components/Demo'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyFirstComponent/> */}
    {/* <Display/> */}
    {/* <SecondComponent/> */}
    {/* <AgeCount/> */}
    {/* <TableDashboard/>/ */}
    {/* <AutocompleteExample/> */}
    {/* <MultiDeleteitem/> */}
    {/* <ColorBox/> */}
    {/* <ColorsSelect/> */}
    {/* <ColorSelects/> */}
    {/* <ColorsSelect/> */}
    {/* <UseEffectPractice/> */}
    {/* <ColorSelect/> */}
    {/* <UseEffect/> */}
    {/* <CustomHook/> */}
    {/* <CustomDataHook/> */}
    {/* <ApiData/> */}
    {/* <PostapiData/> */}
    {/* <CommonApi/> */}
    {/* <RiderApp/> */}
    {/* <FreeApiData/> */}
    {/* <Parent/> */}
    {/* <ParentComponent/> */}
    {/* <Pagination/> */}
    {/* <Portfolio/> */}
    {/* <CallBackHook/> */}
    {/* <Test/> */}
    {/* <TodoApi/> */}
    {/* <ParentData/> */}
    {/* <UseMemoHook/> */}
    {/* <UseRef/> */}
    {/* <TimerREf/> */}
    {/* <UseReducerHook/> */}
    {/* <TodoList/> */}
    {/* <Todolist1/> */}
    {/* <TodoApp/> */}
    {/* <CustomTodoList/> */}
    {/* <CustomTodoList1/> */}
    <MainComponent/>
    {/* <TodoAdd/> */}
  </StrictMode>
  
  
)
