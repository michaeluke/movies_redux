import React , {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './components/style/style.css'
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Load from './components/Load';
import Modal from './components/Modal';
function App() {


 const dispatch = useDispatch();

 const movies = useSelector((state)=>state.rootReducer.postReducer.data);
 const page = useSelector((state)=>state.rootReducer.postReducer.page);
 const modal = useSelector((state)=>state.rootReducer.postReducer.show_modal);

 const api_key = 'fb3ebce35144855bfea3b7c4437adaef'
  useEffect(()=>{

    dispatch({type:"pending"})

    
    const fetch_API = async() =>{

     
      try{

        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}&api_key=${api_key}`, 
        {headers :{
          accept: "application/json",
        }})
        
        .then(response => response.json())
        .then((data) => {
         
          //  console.log(data);

          start_fetching(data);
        debugger

          
        })
      }
      catch(error){
         dispatch({type:"failed",payload:error})
      }

    
    }
    fetch_API();

  },[page])


  const start_fetching = (data)=>{
    debugger
    dispatch({type:"success",payload:data})

  }


  
  return (

 <div>

{modal ? <Modal /> : null}

{(movies && page)? <Header movies={movies} page = {page}/> : null}
     <div className="container">

     <div className="row" id="parent_temp">

        
      {movies?.map((movie ,index) => (

      <div className='col-md-3 gx-4 gy-4' key={index}> <Card movie = {movie}  /> </div>

      ))}


</div>

</div>

<Load/>

</div>



  );
}

export default App;
