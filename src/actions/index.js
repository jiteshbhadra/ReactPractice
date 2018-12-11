import NewspaperActionTypes from '../constants/NewsPaperActionTypes';
    
export const getNewsPaperList =newspaperList =>
    ({
            type: NewspaperActionTypes.GET_NEWSPAPERS_LIST,        
            newspaperList
}); 

export const addNewspaper = newspaper =>(
    {
        type: NewspaperActionTypes.ADD_NEWSPAPER,
        newspaper
    }
);
