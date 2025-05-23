import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './component/Contact-us/Contact.jsx'
import User from './component/User/User.jsx'
import Github from './component/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {path: "",
         element: <Home/>
      },
             {
        path: "about",
        element: <About/>,
       } 
        ,
        {
          path: "contact",
          element: <Contact/>,
        },
        {
        path: "User/:id",
        element: <User/>,
        },
        {
          path: "github",
          element: <Github />,
        }
    ]
      
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
