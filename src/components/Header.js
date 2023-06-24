import React , {useEffect, useState}from "react";
import './style/style.css'

export default function Header(props){

    const [movies_number , set_length] = useState(0);
    const [highest_rating , set_rating] = useState("");
    const [movie , set_movie] = useState("");
    const [page , set_page] = useState("");


    console.log(props.movies)
    debugger
    
    
    useEffect(()=>{
       
        function stat_calc(){
            var rating = 0;
            var index;
            var title_name = "";
            
        
        
            set_length(props.movies.length);
            for (var i = 0; i < props.movies.length; i++) {
              var rt = props.movies[i].vote_average;
              debugger
              if (rt > rating) {
                index = i;
                rating = rt;
              }
            }
            debugger
            
            {index? title_name = props.movies[index].title : title_name = "";
            set_movie(title_name)
            set_rating(rating);
            set_page(props.page);
            debugger
        }
       
       
       
    }
    stat_calc();
})
   


    return(
        <div>
        <div className="header">
                <h1>Movies</h1>
            </div>


            <div className="stats_section">


                <h2>Stats</h2>
                <div id="current_page">{`Page Number: ${page}`}  </div>
                <div id="number_movies">{`Number of Movies: ${movies_number}`}</div>
                <div id="Top_rated">{`Highest Rank: ${movie}`}</div>
                <div id="rating_stats">{`Rating: ${highest_rating}`}</div>

            </div>


           

            </div>
    )
}