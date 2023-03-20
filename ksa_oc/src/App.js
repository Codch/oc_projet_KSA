import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Accomodation from './pages/Accomodation'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// On crée les routes en spécifiant le chemin (path) et le composant à afficher pour chaque route
const router = createBrowserRouter([
  {
    path: '/Kasa/',
    element: <Home />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/accomodation/:id',
    element: <Accomodation />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

// Composant principal de l'application
function App() {
  return (
    <>
      {/* On fournit le router créé précédemment en tant que prop à la balise RouterProvider */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
