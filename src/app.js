import React from 'react';
import { BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

class App extends React.Component{

    render(){
        return (    
            <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />                    
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
} 

export default App;