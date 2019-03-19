import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/200px-Logo_TV_2015.svg.png"
        return (
        <header>
        <img src={logoUrl} aly="Logo"/>
        Header
       </header>
      );  
    }
}
export default Header;