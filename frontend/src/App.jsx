import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import TaskManagement from './pages/TaskManagement'

function App() {
  
  let route=createBrowserRouter([
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/taskManagement",
      element:<TaskManagement/>
    }
  ])

  return (
    <>
      <RouterProvider  router={route} />
    </>
  )
}

export default App
