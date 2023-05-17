import React from 'react'
import TopMenu from '../components/TopMenu/TopMenu'
import { Outlet } from 'react-router-dom'

const MainLayaut = () => {
  return (
    <div>
        <TopMenu/>
        <Outlet/>
    </div>
  )
}

export default MainLayaut