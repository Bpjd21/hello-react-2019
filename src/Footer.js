import React, {Component} from "react";
import './Footer.css';

class Footer extends Component {
    render(){
        const {copyrightYear, copyrightHolder} = this.props;
        return (
            <footer>
            &copy; {copyrightYear} {copyrightHolder}
            </footer>

    );
    }
}

export default Footer;