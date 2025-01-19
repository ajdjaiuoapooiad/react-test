import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homelayout from "./pages/Homelayout";
import Search, { loader as searchLoader } from './pages/Search'
import { loader as landingLoader } from './pages/Landing' 
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import ErrorElement from "./components/ErrorElement";
import Create from './pages/Create';


const router = createBrowserRouter([
  {
    path: '/products',
    element: <Homelayout />,
    errorElement: <Error />,
    children: [
      {
        index:  true,
        element: <Landing />,
        errorElement: ErrorElement,
        loader: landingLoader,
      },
      {
        path: 'search',
        element: <Search />,
        loader: searchLoader,
        errorElement: ErrorElement,
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