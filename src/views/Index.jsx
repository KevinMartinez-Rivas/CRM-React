// Hooks
import { useLoaderData } from "react-router-dom";

// Components
import Client from "../components/Client";

// API
import { getClients } from "../data/clients";

export async function loader() {
  const clients = getClients();

  return clients;
}

const Index = () => {
  const clients = useLoaderData();

  return (
    <>
      <header>
        <h2 className="text-4xl text-blue-900 font-bold">Panel de clientes</h2>
        <p className="text-gray-500 font-light">Panel de administración para los clientes de tu empresa</p>
      </header>

      <div className="min-h-screen">
        {clients.length ? (
          <table className="mt-5 w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-2 text-center">Cliente</th>
                <th className="p-2 text-center">Contacto</th>
                <th className="p-2 text-center">Acción</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <Client 
                  key={client.id}
                  client={client}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-2xl text-gray-500 text-center">No hay clientes aún</p>
        )}
      </div>
    </>
  )
}

export default Index;