import React from 'react'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import { Layout } from './components'
import { About, Contact, ErrorPage, Home, Login, Register, Sitemap } from './pages'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index={true} element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='sitemap' element={<Sitemap />} />
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <div className='flex flex-col h-screen'>
        <header className='flex-grow-0 flex-shrink-0 w-full'>
          <Header />
        </header>
        <main className='flex-grow flex-shrink-0 mt-14'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='sitemap' element={<Sitemap />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <footer className='flex-grow-0 flex-shrink-0'>
          <Footer />
        </footer>
      </div> */}
    </>
  )
}

export default App