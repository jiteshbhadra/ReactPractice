import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddNewspaper from './AddNewspaper';
import { addNewspaper} from 'actions';
import { NewspaperService } from 'api'; 

class AddNewspaperPage extends Component{
    constructor(props){
        super(props);        

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit({name,publishYear}){
        NewspaperService.addNewspaper({name:name,publishYear:publishYear})
        .then((response)=>{            
            this.props.addNewspaper(response);
        }
        );   
        return false;
    }
    render(){        
        return(
            <AddNewspaper onSubmit={this.handleSubmit}/>
        );
    }
}
// function mapStateToProps(state,ownProps){
//     const {NewspaperReducer} = state;         
//     return(
//         {
//             newspaperList: NewspaperReducer.newspaperList
//         }
//     );    
// }
function mapDispatchToProps(dispatch,ownProps){
    return(
        {
            addNewspaper: (newspaper) =>{
                dispatch(addNewspaper(newspaper));   
            }
        }
    );

}
export default connect(null,mapDispatchToProps)(AddNewspaperPage);