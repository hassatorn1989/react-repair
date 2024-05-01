import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import SidebarComponent from '../components/SidebarComponent'
import NavbarComponent from '../components/NavbarComponent'

function AppLayout() {
    useEffect(() => {
        return () => {
            // change class body
            document.body.classList.add('hold-transition')
            document.body.classList.add('sidebar-mini')
            document.body.classList.add('layout-fixed')
        }
    }, [])
    return (
        <>
            <div className="wrapper">
                {/* Navbar */}
                <NavbarComponent />
                {/* /.navbar */}
                {/* Main Sidebar Container */}
                <SidebarComponent />
                {/* Content Wrapper. Contains page content */}
                <Outlet />
                {/* /.content-wrapper */}
                
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
            </div>

        </>
    )
}

export default AppLayout