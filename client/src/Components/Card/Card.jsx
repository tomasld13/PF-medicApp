import React from 'react'
import style from "./Card.module.css"
import img from "../Testimonials/face1.jpg"
import { Link, Navigate } from "react-router-dom";

export default function Card({nombreCompleto, experiencia, especialidad, ciudad, id}) {

  return (
    <div 
    //className={style.content}
    className="container flex flex-col h-200 w-64  p-4 m-2.5 bg-secundary rounded-lg border border-primary xl:w-1/4 lg:w-1/3"
    >
        <div className='flex justify-around items-center'>
            <img className='rounded-full w-1/2' src={img}/>
            <div> 
                <Link to={`/psico/${id}`}>
                <h2 className='text-lg font-bold md:text-2xl'>{nombreCompleto?nombreCompleto.split(" ")[0]:nombreCompleto}</h2>
                <h2 className='text-lg font-bold md:text-2xl'>{nombreCompleto?nombreCompleto.split(" ")[2]:nombreCompleto}</h2>
                </Link>
            </div>
        </div>
        <input className='py-1' type="range" />
        <h3 className='text-start text-md md:text-lg'><b>Ciudad:</b> {ciudad?ciudad[0]+ciudad.slice(1).toLowerCase():ciudad}</h3>
        <h3 className='text-start text-md md:text-lg'><b>Especialidad:</b> {especialidad}</h3>
        <h3 className='text-start text-md md:text-lg'><b>Experiencia:</b> {experiencia} años</h3>
    </div>
  );
}