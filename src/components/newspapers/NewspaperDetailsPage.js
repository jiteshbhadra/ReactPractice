import React,{Component} from 'react';
import { NewspaperService } from 'api'; 

class NewspaperDetailsPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:"",
            publishYear:"",
            error:false
        };
    }
    componentDidMount(){
        const {params} = this.props.match;
        const {name} = params;

        NewspaperService.getNewspaperByName(name)
        .then((response)=>{            
            this.setState({
                name: response.name,
                publishYear: response.publishYear,
                error:false
            });
        })
        .catch((error)=>{
            this.setState({               
                error:true
            });
        });
    }
    render(){        
        return(
            <div>Newspaper Details<br/>  
            {
                this.state.error ? <span className="alert-danger">Could not load newspaper details. please try again later</span>
                :
                (<div><span>{this.state.name}</span><br/>
                <span>{this.state.publishYear}</span></div>)
            }
            </div>
        );
    };
}

export default NewspaperDetailsPage;