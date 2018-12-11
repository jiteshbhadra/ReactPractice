import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import NewspaperReducer from './NewspaperReducer';


export default combineReducers(
{
    NewspaperReducer:NewspaperReducer,
    form: formReducer
}
);