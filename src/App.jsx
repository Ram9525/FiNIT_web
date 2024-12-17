import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home_Layout from './Layout/Home_Layout.jsx'
import Root_Layout from './Layout/Root_Layout.jsx'
import Event_Layout from './Layout/Event_Layout.jsx'
import About_Layout from './Layout/About_Layout.jsx'
import Team_Layout from './Layout/Team_Layout.jsx'

const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root_Layout/>}>
        <Route path='' element={<Home_Layout/>} />
        <Route path='about' element={<About_Layout/>} />
        <Route path='team' element={<Team_Layout/>} />
        <Route path='events' element={<Event_Layout/>} />
      </Route>
    )
  )

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App