import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Yukpa from './pages/Yukpa.jsx'
import Bari from './pages/Bari.jsx'
import Uwa from './pages/Uwa.jsx'

const router = createBrowserRouter([
  {
    path: "Entre_Nosotros/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "yukpa",
        element: <Yukpa />
      },
      {
        path: "bari",
        element: <Bari />
      },
      {
        path: "uwa",
        element: <Uwa />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
