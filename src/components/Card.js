import React from "react";
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
export default function Card(props){

    const dispatch = useDispatch();
    const handle_modal = ()=> {

        dispatch({type:"open_Modal",payload: true})
        dispatch({type:"get_film",payload: props.movie})
        debugger
    }
    return(
   
     
        <div className="wrapper">    
                     <div className="card card_class" onClick={handle_modal}>
                         <img className="card-img-top img-fluid" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt="Card image cap"/>
                         <div className="card-body d-flex flex-column text-center">
                             <p className="card-text">{props.movie.title}</p>
                             <p className = "rating">{props.movie.vote_average}</p>
                         </div>                   
                     </div>              
      </div> 
 

    )
}