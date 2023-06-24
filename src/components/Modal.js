import React from "react";
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';

export default function Modal(){

const dispatch = useDispatch();
const selected_film = useSelector((state)=>state.rootReducer.postReducer.selected_film);
console.log(selected_film.poster_path)
debugger
const close_Modal = () =>{
    dispatch({type:"open_Modal",payload: false})

}

    return(

   


<div className="modal modal-lg d-block" id="myModal" tabIndex="-1" >

<div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-header">


            <button onClick={close_Modal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>


        <div className="modal-body">
        
            <div className="row">

                <div className="col-md-6" sx={{paddingTop:'8x'}}>
                
                    <img className="img-modal img-fluid" id="img-modal" src={`https://image.tmdb.org/t/p/w500/${selected_film.poster_path}`} alt="place" sx={{width:'100%'}}/>

                </div>
                <div className="col-md-6 d-flex flex-column">
                    <h1 id="title">  {`Title: ${selected_film.title}`} </h1>
                    <div id="rating">
                    {`Rating: ${selected_film.vote_average}`} 
                    </div>

                    <div id="description">
                    {`Description: ${selected_film.overview}`} 
                    </div>
                </div>
            </div>


        </div>

    </div>
</div>
</div>

      
    )



    
}