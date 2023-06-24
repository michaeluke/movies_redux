import React from "react";
import './style/style.css'
import { useDispatch, useSelector } from 'react-redux';

export default function Load(){


    const dispatch = useDispatch();


    const page = useSelector((state)=>state.rootReducer.postReducer.page);



    const next_page = () =>{

        dispatch({type:"change_page",payload: page + 1})

    }

    const prev_page = () =>{

        if(page != 1){
            dispatch({type:"change_page",payload: page - 1})
        }
       

    }

    return(

        <div>
        <div className="footer d-flex">

        <button id="previous" onClick={prev_page}>Previous</button>
        <button id="next" onClick={next_page}>Next</button>

        </div>
        </div>
    )
}