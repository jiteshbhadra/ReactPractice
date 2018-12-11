import React from 'react';

class NewsListPage extends React.Component{
    renderNewspapers(newspapers){
        return newspapers.map((item,index)=>
                    {
                        return <tr key={index}><th scope="row"><a href={`newspapers/${item.name}`}>{item.name}</a></th><td><a href="#">{item.publishYear}</a></td></tr>;
                    });
    }
    render(){        
        const {newspapers} = this.props;        
        // const newspapers = [];
        return (
            <div>
            <p><b>List of Newspapers</b></p>
            <table border="1" className="table"><tbody>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Publish Year</th>
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