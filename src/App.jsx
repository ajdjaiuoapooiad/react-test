import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homelayout from "./pages/Homelayout";
import { Create, Search } from "./pages";
import { loader as searchLoader } from './pages/Search'
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import ErrorElement from "./components/ErrorElement";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homelayout />,
    errorElement: <Error />,
    children: [
      {
        index:  true,
        element: <Landing />,
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