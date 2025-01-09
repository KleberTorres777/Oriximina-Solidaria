import React from 'react';
import './Footer.css';

const Footer = () => {
return (

    <footer>

    <div className='footer'>
        <h1>Oriximina Solidaria</h1><br />
        <h2>Autores</h2><br />

        <ul>
            <li>Josiel Santos</li>
            <li>Cleberson Pimenta</li>
            <li>Kleber Torres</li>
            <li>Nilton Wayway</li>
        </ul><br />
        <div className='logos'>
            <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
            <img width="50" heighta="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
        </div>
    </div>
    </footer>
);
};

export default Footer;
