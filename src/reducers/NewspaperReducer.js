import NewspaperActionTypes from '../constants/NewsPaperActionTypes';

const initialState = {
    newspaperList:[]    
}
export default function (state= initialState,action) {  
     
    switch (action.type) {
        case "CREATE_NEWSPAPER":
            return Object.assign({},state,
                {
                    name: "test",publishYear:1980
                });
            break;
        case NewspaperActionTypes.GET_NEWSPAPERS_LIST:            
            return {...state,newspaperList:action.newspaperList};    
            break;        
    
        default:
            return state;
            break;
    }
    
}