import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homelayout from "./pages/Homelayout";
import Search from './pages/Search';
import Create from "./pages/Create";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homelayout />,
    children: [
      {
        index:  true,
        element: <Search />,
      },
      {
        path: 'create',
        element: <Create />,
      },
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App