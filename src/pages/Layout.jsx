import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <h1>
            Layout
            <Outlet />
        </h1>
    </div>
  )
}

export default Layout