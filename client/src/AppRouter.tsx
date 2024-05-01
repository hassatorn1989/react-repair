import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './page/layouts/AppLayout'
import LoginPage from './page/LoginPage'
import DashboardPage from './page/DashboardPage'
import NotFoundPage from './page/NotFoundPage'
import PrefixPage from './page/PrefixPage'
import DepartmentPage from './page/DepartmentPage'
import UserPage from './page/UserPage'

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/" element={<AppLayout />} >
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/prefix" element={<PrefixPage />} />
                    <Route path="/department" element={<DepartmentPage />} />
                    <Route path="/user" element={<UserPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}

export default AppRouter