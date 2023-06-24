const initializestate = {

    status: "idle",
    data: [],
    page: 1,
    show_modal : false,
    selected_film: "",
    error: null


}


const postReducer = (state = initializestate, action) => {

    switch (action.type){
        


        case "pending":

          return{
            ...state,
            status: "Started"
          }

        
        case "success":
            
          return{
            ...state,
        
            status: "Fetched",
            data: action.payload.results,
            page: action.payload.page,

          }

        case "failed":
           return{
            ...state,
            status: "error",
            error: action.payload

           }

        case "change_page":
          return{
            ...state,
            page: action.payload

          }

        case "open_Modal":
          return{
            ...state,
            show_modal: action.payload

          }
        
        case "get_film":
          return{
            ...state,
            selected_film : action.payload
          }

           default:
            return state;


    }


}

export default postReducer;