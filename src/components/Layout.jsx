import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
    return (
        <>
            <div className='flex flex-col min-h-screen bg-white text-slate-800 enable-dark-mode'>
                <header className='flex-grow-0 flex-shrink-0 w-full'>
                    <Header />
                </header>
                <main className='flex-grow flex-shrink-0 mt-14'>
                    <Outlet />
                </main>
                <footer className='flex-grow-0 flex-shrink-0'>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Layout