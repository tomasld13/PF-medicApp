import React, { useMemo, useState, useContext,useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "../../hooks/useForm";
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../slice/auth/thunks.js';
import imgGoogle from "./google_icon-icons.com_62736.ico"
import { AuthContext } from '../../context/authContext/AuthContext';
import styled from 'styled-components';

export default function Login() {

    const { status } = useSelector(state => state.auth.authBack);
    const errorMessage = useSelector(state => state.auth.error);
    const { login } = useContext( AuthContext );

    const dispatch = useDispatch();

    const { email, password, onInputChange, isFormValid, emailValid } = useForm({
        email: '',
        password: ''
    });
    
    //Este componente memoriza el valor que retorna la funcion y se vuelve a evaluar cada vez que el valor status cambia
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const handlerSubmit = async (e) => {
        e.preventDefault();
        const ok = await login( email, password );
        dispatch(startLoginWithEmailPassword(email, password));
        //Sesion google: email, password. La idea es que cuando haga sesion,
        //Yo agarre esa info, y se la pase al login(email,password);
        //stateUsuariodeGoogle...
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn(login));
    }

    return (
        <Container> 
        <div className='container h-full w-full flex flex-col justify-center items-center mx-auto mt-auto bg-secundary rounded'>
            <h1 className='text-3xl py-5 text-black'>Iniciar Sesion</h1>
            <form onSubmit={handlerSubmit}>
                <div>
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="email" placeholder="Correo" name="email" value={email} onChange={onInputChange}/>
                </div>
                <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="password" placeholder="Contraseña" name="password" value={password} onChange={onInputChange}/>
                <div className="flex flex-col items-center">
                    {errorMessage !== '' ? <span style={{color:'red'}}>{errorMessage}</span> : null}
                    <button className='bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 h-12 ' disabled={isAuthenticating}>Iniciar Sesión</button>
                    <div>
                        <button className='flex bg-primary text-white border border-primary font-bold  py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 items-center h-12' onClick={onGoogleSignIn} disabled={isAuthenticating}><img class="scale-40"  src={imgGoogle}/>Conéctate con Google</button>
                    </div>
                </div>
                <a href='/auth/register'>
                    <p className="my-2 text-black hover:text-primary">Crear una cuenta</p>
                </a>
                <div className="mt-2 text-black pb-5 hover:text-primary">
                    <Link to='/'>
                        Regresar
                    </Link>
                </div>
            </form>
        </div>
    </Container>
    );
}

const Container = styled.div`
    background-color: #212329;
    height: 100vh;
`