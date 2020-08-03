import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css';
import ButtonLink from '../ButtonLink';


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt='Baziflix logo'/>
            </a>

            <ButtonLink ClassName="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;