import React, {useContext} from 'react'
import { ThemeContext } from '@/Context/ThemeProvider'


export const useTheme = () => {
  return useContext(ThemeContext)
}
