import React, { useContext, useState } from 'react';

import { AuthContext } from '../../context/authContext/AuthContext';
import { ChatContext } from '../../context/chatContext/chatContext';
import { SocketContext } from '../../context/socketContext/SocketContext';

export const SendMessage = () => {

    const [ mensaje, setMensaje ] = useState('');

    const { socket } = useContext( SocketContext );
    const { auth } = useContext( AuthContext );
    const { chatState } = useContext( ChatContext );


    const onChange = ({ target }) => {
        setMensaje( target.value );
    }


    const onSubmit = (ev) => {
        ev.preventDefault();

        if ( mensaje.length === 0 ){ return; }
        setMensaje('');

        // TODO: Emitir un evento de sockets para enviar el mensaje
        // {
        //     de: // iddel usuario enviando el mensaje
        //     para: // iddel usuario que recibe el mensaje
        //     mensaje: // lo que quiero enviar
        // }
        socket.emit( 'mensaje-personal', {
            de: auth.id,
            para: chatState.chatActivo,
            mensaje
        });
        console.log({
            de: auth.id,
            para: chatState.chatActivo,
            mensaje
        })

        // TODO: hacer el dispatch de el mensaje... 

    }

    return (
        <form onSubmit={ onSubmit }>
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input
                        type="text"
                        className="write_msg"
                        placeholder="Mensaje..."
                        value={ mensaje }
                        onChange={ onChange }
                    />
                </div>
                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mb-15" type="submit">
                        enviar
                    </button>
                </div>
            </div>
        </form>
    )
}
