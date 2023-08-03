import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();
    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-blue-600 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>

                <nav className="bg-blue-500 rounded mt-5 flex flex-col justify-center gap-y-1 p-5">
                    <Link className={`${location.pathname === '/' ? 'text-blue-200' : 'text-white'} text-2xl hover:text-blue-200`} to="/">Home</Link>
                    <Link className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-200' : 'text-white'} text-2xl hover:text-blue-200`} to="/clientes/nuevo">Nuevo Cliente</Link>
                </nav>
            </aside>

            <main className="md:w-3/4 md:h-screen overflow-y-scroll p-10">
                <Outlet>
                    {/* Contenido */}
                </Outlet>

                <footer className="mt-3">
                    <h2 className="text-center text-gray-500 font-light">Todos los derechos reservados. 2023</h2>    
                </footer>  
            </main>
        </div>
    )
}

export default Layout;