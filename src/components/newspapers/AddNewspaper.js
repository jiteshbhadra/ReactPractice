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
                    <Field label="Name" name="name" component={InputStandard} type="text"/>
                    <Field label="Publish Year" name="publishYear" component={InputStandard} type="text" />
                    {/* <InputStandard name="name"></InputStandard>
                    <InputStandard name="publishYear"></InputStandard> */}
                    <button type="submit" onSubmit={handleSubmit} >Create Newspaper</button>
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
    return errors;
}

export default
reduxForm(
{
    form: 'addnewspaper',
    validate
}
)(AddNewspaper);
// export default AddNewspaper;