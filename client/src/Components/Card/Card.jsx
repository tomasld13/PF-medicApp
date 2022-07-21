import { useEffect, useState } from 'react'
import style from "./Card.module.css"
import img from "../Testimonials/face1.jpg"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { psychoFavs, getPsychoFavs } from '../../slice/psico/thunks';

  
export default function Card({nombreCompleto, experiencia, especialidad, ciudad, id, avatar}) {

  const idUserBack = useSelector(state => state.auth.authBack.id);
  const idUserGoogle = useSelector(state => state.auth.authGoogle.id);
  const idUser = idUserBack ? idUserBack : idUserGoogle;
  const psicologoFavs = useSelector(state => state.psicology.psychologiFavs);
  
  const dispatch = useDispatch();
  let btnvar1 = document.getElementById(id);
  if(btnvar1){
    let a = document.createAttribute("style")
    a.value = "color: grey";
    btnvar1.setAttributeNode(a);
  }else{
    console.log("no existe el elemento");
  }
  let find;
  if (psicologoFavs.favoritos) {
    find = psicologoFavs?.favoritos.find(p => p.psicofavorito === nombreCompleto);
  }
  useEffect(() => {
    if(btnvar1 && find){
      btnvar1.style.color = "red";
    }
    if(btnvar1 && !find){
      btnvar1.style.color = "grey";
    }
  })

  const onClick = (e) => {
    e.preventDefault();
    if (btnvar1.style.color === "red") {
      dispatch(psychoFavs('DELETE',idUser,id));
      btnvar1.style.color = "grey";
    } else {
      dispatch(psychoFavs('POST',idUser,id));
      btnvar1.style.color = "red";
  } 
    }

  return (
    <div 
    className="container flex flex-col h-200 w-64  p-4 m-2.5 bg-secundary rounded-lg border border-primary xl:w-1/4 lg:w-1/3"
    >
        <div className='flex justify-around items-center'>
          {
            !idUserBack && !idUserGoogle ? null : <div >
              <button aria-label='like' id={id} className={style.boton} onClick={onClick}  ><i class="fa-solid fa-heart"></i></button>
            </div>
          }
            <img className='rounded-full w-1/2' src={avatar ? avatar : img}/>
            <div> 
                <Link to={`/psico/${id}`}>
                  <h2 className='text-lg font-bold md:text-2xl'>{nombreCompleto?nombreCompleto.split(" ")[0]:nombreCompleto}</h2>
                  <h2 className='text-lg font-bold md:text-2xl'>{nombreCompleto?nombreCompleto.split(" ")[2]:nombreCompleto}</h2>
                </Link>
            </div>
        </div>
        
        <h3 className='text-start text-md md:text-lg'><b>Ciudad:</b> {ciudad?ciudad[0]+ciudad.slice(1).toLowerCase():ciudad}</h3>
        <h3 className='text-start text-md md:text-lg'><b>Especialidad:</b> {especialidad}</h3>
        <h3 className='text-start text-md md:text-lg'><b>Experiencia:</b> {experiencia} años</h3>
    </div>
  );
}