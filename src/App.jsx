import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homelayout from "./pages/Homelayout";
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import ErrorElement from "./components/ErrorElement";
import Create from './pages/Create';
import Products from "./pages/Products";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homelayout />,
    errorElement: <Error />,
    children: [
      {
        index:  true,
        element: <Landing />,
        errorElement: ErrorElement,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
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