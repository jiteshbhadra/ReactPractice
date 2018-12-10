import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component{
    render(){
        return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item active mr-10">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item mr-10">
                            <Link to="/newspapers">Newspapers</Link>
                        </li> 
                        <li className="nav-item">
                            <Link to="/about">About</Link>
                        </li>                            
                    </ul>    
                </div>            
                </nav>                  
        );
    }

}


export default Header;