import React from 'react';
 

function ButtonLink(props) {
    console.log(props)
    return (
        <a className={props.ClassName} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;