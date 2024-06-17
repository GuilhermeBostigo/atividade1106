import Home from './pages/home/index.tsx'
import Tarefas from './pages/tarefas/index.tsx'
import Sobre from './pages/sobre/index.tsx'
import NotFound from './pages/not-found/index.tsx'
import { createBrowserRouter } from 'react-router-dom'
import Contato from './pages/contato/index.tsx'

const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/tarefas', element: <Tarefas/>},
  {path: '/sobre', element: <Sobre />},
  {path: '/contato', element: <Contato/>},
])

export default router