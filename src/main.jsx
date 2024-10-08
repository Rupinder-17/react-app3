import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import MyFirstComponent from './MyFirstComponent.jsx'
// import { SecondComponent } from './Components/SecondComponent'
// import Display from './Components/DisplayCOmponents.jsx'
// import { AgeCount } from './Components/AgeCount.jsx'
import { TableDashboard } from './Components/TableDashboard'
import { MultiDeleteitem } from './Components/MultiDeleteitem'
import ColorBox from './Components/ColorSelect'
import { ColorsSelect } from './Components/ColorsSelect'
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
    <ColorsSelect/>
  </StrictMode>,
  
)
