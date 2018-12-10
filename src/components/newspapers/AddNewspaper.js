import React, {Component} from 'react';

class AddNewspaper extends Component{
    render(){
        return
        (
            <div>
                <label>Name:</label>
                <input type="text"></input>
                <label>Publish Year</label>
                <input type="text"></input>
            </div>
        )
    }
}

export default AddNewspaper;