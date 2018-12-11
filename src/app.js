import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NewsPaperData from './components/newspapers/NewsPaperData';
import NewspaperDetailsPage from './components/newspapers/NewspaperDetailsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/common/common.css';

class App extends React.Component{

    render(){
        return (    
            <BrowserRouter>
            <div>
                <Header/>                
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/newspapers" component={NewsPaperData} />
                    <Route exact path="/newspapers/:name" component={NewspaperDetailsPage} />
                    <Route path="/about" component={AboutPage} />                    
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
} 

export default App;