import React from "react";

const IconButton = ({ app }) => {
    const { img, href, alt, color, txt, name } = app;
    return (
        <a href={href}
           className="btn login-btn"
           style={{ backgroundColor: color ,paddingLeft:50,paddingBottom:17.5,paddingRight:55 ,margin: 15, marginRight:0 ,}}
           title={txt}
        >
            <img src={img} alt={alt} className="btn-icon" />
            <span className="btn-txt">Continue with {name}</span>
        </a>
    );
};

export default IconButton;