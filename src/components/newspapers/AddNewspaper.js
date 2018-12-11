import React, {Component} from 'react';
import { Field,reduxForm } from 'redux-form';

import InputButton from '../common/InputButton';
import InputStandard from '../common/InputStandard';


class AddNewspaper extends Component
{
    render()
    {
        const {handleSubmit} = this.props;
        return(
            <div>
                <form onSubmit={handleSubmit}> 
                    <Field label="Name" placeholder="Name" name="name" component={InputStandard} type="text"/>
                    <Field label="Publish Year" placeholder="Publish Year" name="publishYear" component={InputStandard} type="text" />
                    {/* <InputStandard name="name"></InputStandard>
                    <InputStandard name="publishYear"></InputStandard> */}
                    {/* <button type="submit" onSubmit={handleSubmit} >Create Newspaper</button> */}
                    <InputButton onSubmit={handleSubmit} value="Create Newspaper"></InputButton>
                </form> 
            </div>
        );
    }
}
function validate(values){      
    const errors ={};
    if(!values.name){
        errors.name = "Enter a Name";
    }
    if(!values.publishYear){
        errors.publishYear = "Enter a Publish Year";
    }
    return errors;
}

export default
reduxForm(
{
    form: 'addnewspaper',
    validate,
    initialValues:{
        name:"",
        publishYear:null
    }
}
)(AddNewspaper);
// export default AddNewspaper;