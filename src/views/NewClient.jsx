// Hooks
import { useNavigate, Form, useActionData, redirect } from "react-router-dom"

// Components
import Formulario from "../components/Formulario";
import Error from "../components/Error";

// API
import { postClients } from "../data/clients";

export async function action({request}) {
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");


  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  const errors = [];
  if(Object.values(data).includes('')){
    errors.push('Todos los campos son obligatorios');
  }
  
  if(!regex.test(data.email)){
    errors.push('El correo ingresado no es valido');
  }

  if(Object.keys(errors).length){
    return errors;
  }

  await postClients(data);

  return redirect('/');
}

const NewClient = () => {
  const navigate = useNavigate();
  const action = useActionData();

  return (
    <>
      <header>
        <h2 className="text-4xl text-blue-900 font-bold">Ingresa un nuevo cliente</h2>
        <p className="text-gray-500 font-light">Formulario de ingreso de nuevos clientes</p>
      </header>

      <div className="flex justify-end">
        <button 
          className="p-2 bg-blue-600 text-white font-bold uppercase rounded mb-5"
          onClick={() => navigate('/')}  
        >
          Regresar
        </button>
      </div>

      <div className="bg-white rounded shadow md:w-3/4 mx-auto px-5 py-10">
        { (action?.length) && action.map((error, i) => (
          <Error key={i}>{error}</Error>
        ))}

        <Form 
          method="POST"
          noValidate
        >
          <Formulario 

          />

          <input value='Ingresar Cliente' type="submit" className="mt-3 w-full p-2 bg-blue-600 text-white font-bold uppercase rounded cursor-pointer"/>
        </Form>
      </div>
    </>
  )
}

export default NewClient