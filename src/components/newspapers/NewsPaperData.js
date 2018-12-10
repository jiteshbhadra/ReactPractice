import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsListPage from './NewsListPage';
import { getNewsPaperList } from 'actions';

class NewsPaperData extends Component {
    constructor(props)
    {
        super(props);  
        this.state = {
            newspapers: []
        };
    }
    componentDidMount(){                      
        const newsPapers = [{name:"A",publishYear:1900},{name:"B",publishYear:1900}];
        this.props.getNewsPaperList(newsPapers);
    }
    render(){
        const {newspaperList} =this.props;
        return (
            <div><NewsListPage newspapers = {newspaperList}/></div>
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