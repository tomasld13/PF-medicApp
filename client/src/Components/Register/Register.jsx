import { useState } from "react";
import Nav from "../Nav/Nav.jsx"
import { RegisterPatient } from "../RegisterPatient/RegisterPatient";
import { RegisterPsycho } from "../RegisterPsycho/RegisterPsycho.jsx";
import styled from "styled-components";

export default function Register() {

    const [rol, setRol] = useState();

    const onChange = (e) => {
        setRol(e.target.value);
    }

    return (
       
        <div className="container h-screen w-screen flex flex-col justify-center items-center mx-auto mt-auto bg-secundary rounded">
            <h1 className="text-3xl py-5 text-black font-bold">Crear cuenta</h1>
            <div>
                <div className="flex flex-col content-center items-center">
                    <select className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' name="rol" id="rol" onChange={onChange}>
                        <option  selected disabled value=""> Rol </option>
                        <option value="Psicologo">Psicologo</option>
                        <option value="Paciente">Paciente</option>
                    </select>
                </div>
                {
                    rol === 'Paciente' ? <RegisterPatient rol={rol} /> 
                    : rol === 'Psicologo' ? <RegisterPsycho rol={rol} /> : null 
                }
                <div className="mt-2 pb-5 text-black font-bold">
                    <p classname= 'text-black font-bold'>
                    ¿Ya tienes cuenta?<a href='/auth/login' className=" text-black font-bold hover:text-primary"> Ingresar</a>
                    </p>
                </div>
            </div>
        </div>
  

    );
}

const Container = styled.div`
    background-color: #212329;
    height: 160vh;
`