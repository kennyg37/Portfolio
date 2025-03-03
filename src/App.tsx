import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header'


const AppLayout = () => {
  return (
    <>
      <Header />
    </>
  )
}

const route = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route path='/' element={<AppLayout />}/>
  </>
  )
)

export function App() {
  return (
    <RouterProvider router={route} />
  )
}

export default App
