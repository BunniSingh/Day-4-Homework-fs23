import React from 'react'
import './Card.css'
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
const Card = ({ props }) => {
    return (
        <>
            {
                props.map((data, idx) => {
                    // console.log(data.Poster)
                    return (
                        <div key={`id_${idx}`} className="container">
                            <div className="left">
                                <div className="movie-data">
                                    <img src={data.Images[0]} alt="film-poster" />
                                    <div className="title">
                                        <h2>{data.Title}</h2>
                                        <p>{data.Year}, {data.Director}</p>
                                        <div className="movie-type">
                                            <p>{data.Runtime}</p>
                                            {data.Genre}
                                        </div>
                                    </div>
                                </div>
                                <p className="movie-discription">
                                    {data.Plot}
                                </p>
                                <div className="icons">
                                    <IoShareSocial className='icon'/>
                                    <FaRegHeart className='icon'/>
                                    <FaMessage className='icon'/>
                                </div>
                            </div>
                            <div className="right">
                                <img src={data.Images[1]} alt="poster-image" />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card