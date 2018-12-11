import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsListPage from './NewsListPage';
import AddNewspaperPage from './AddNewspaperPage';
import { getNewsPaperList } from 'actions';
import { NewspaperService } from 'api'; 

class NewsPaperData extends Component {
    constructor(props)
    {
        super(props);  
        this.state = {
            newspapers: []
        };
    }
    componentDidUpdate(){ 
        NewspaperService.getNewsPaperList()
        .then((newspapers) =>{
            this.props.getNewsPaperList(newspapers);
            }
        );
    }
    componentDidMount(){   
        NewspaperService.getNewsPaperList()
        .then((newspapers) =>{
            this.props.getNewsPaperList(newspapers);
            }
        );
        // const newsPapers = [{name:"A",publishYear:1900},{name:"B",publishYear:1900}];
        
    }
    render(){
        const {newspaperList} =this.props;
        return (
            <div>
                <NewsListPage newspapers = {newspaperList}/>
                <p>Add Newspaper</p>
                <AddNewspaperPage />
            </div>
        );
    }    
}
function mapStateToProps(state,ownProps)
{
    const {NewspaperReducer} = state;       
    return{
        newspaperList:NewspaperReducer.newspaperList
    }
}
const mapDispatchToProps = dispatch =>({    
    getNewsPaperList: newspaperList =>dispatch(getNewsPaperList(newspaperList))
})


export default connect(mapStateToProps,mapDispatchToProps)(NewsPaperData);