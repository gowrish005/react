import React from "react";

function Footer(props) {
  return (
    <footer>
      {props.tagline} <br/>
      {props.copyright}
    </footer>
  );
}

export default Footer;
