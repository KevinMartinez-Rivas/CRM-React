import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
      <div className="space-y-8 ">
          <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">CRM - Clientes</h1>
          <div className="bg-red-200 p-5 flex flex-col">
            <p className="font-bold text-center text-red-700 text-2xl mb-3">Error:</p>
            <p className="font-bold text-center text-red-700">{error.statusText || error.message}</p>
          </div>
      </div>
    )
}

export default ErrorPage;