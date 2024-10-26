import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./routes/home"
import Forecast from "./routes/forecast"

const router = createBrowserRouter([
  { path: '/', element: <Home />},
  { path: '/forecast', element: <Forecast />},
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
