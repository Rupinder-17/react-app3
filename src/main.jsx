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
    <UseEffect/>
  </StrictMode>,
  
)
