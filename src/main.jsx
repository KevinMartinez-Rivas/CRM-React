import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Style CSS
import './index.css'

// Components
import Layout from './components/Layout'
import ErrorPage from './components/ErrorPage'

// Views
import NewClient, {action as newClientAction} from './views/NewClient'
import EditClient, {action as editClientAction, loader as editClientLoader} from './views/EditClient'
import Index, { loader as clientsLoader} from './views/Index.jsx';

//
import { action as deleteClientAction } from './components/Client'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:idclient/editar',
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:idclient/eliminar',
        action: deleteClientAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
      router={router}
    />
  </React.StrictMode>,
)
