
import React from "react";

function Footer(props){
    return(
        <footer>
            <a>{props.tagline}</a>
            <br />
            <a>{props.copyright}</a>
        </footer>
    );
}
export default Footer;