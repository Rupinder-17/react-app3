import { MyContext } from '@/Context/ThemeChange'
import React, { useContext } from 'react'

export const useMyTheme = () => {
  return useContext(MyContext)
}
