import React from 'react';

class NewsListPage extends React.Component{
    renderNewspapers(newspapers){
        return newspapers.map((item,index)=>
                    {
                        return <tr key={index}><td >{item.name}</td><td >{item.publishYear}</td></tr>;
                    });
    }
    render(){        
        const {newspapers} = this.props;        
        // const newspapers = [];
        return (
            <div>
            <b>List of Newspapers</b>
            <table border="1"><tbody>
                <tr>
                    <td>Name</td>
                    <td>Publish Year</td>
                </tr>   
                { 
                    // newspapers.map((item,index)=>
                    // {
                    //     return <tr key={index}><td >{item.name}</td><td >{item.publishYear}</td></tr>;
                    // })
                    this.renderNewspapers(newspapers)
                } 
                </tbody>          
            </table>
            </div>
        );
    }
}

export default NewsListPage;