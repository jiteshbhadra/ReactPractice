import NewspaperActionTypes from '../constants/NewsPaperActionTypes';

const initialState = {
    newspaperList:[]    
}
export default function (state= initialState,action) {  
     
    switch (action.type) {
        case NewspaperActionTypes.ADD_NEWSPAPER:                   
            return {
                ...state,
                newspaperList: [...state.newspaperList,action.newspaper]
            }            
        case NewspaperActionTypes.GET_NEWSPAPERS_LIST:            
            return {...state,newspaperList:action.newspaperList};               
    
        default:
            return state;            
    }
    
}