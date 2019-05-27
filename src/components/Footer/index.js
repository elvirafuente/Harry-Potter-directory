import React from 'react';
import './styles.scss';

class Footer extends React.Component{
    render(){
        return (
            <footer className="page__footer">
                <small>Harry Potter's Directory - made by <a className="footer__link" rel="noopener noreferrer" href="mailto:elvirafuente@gmail.com" target="_blank">Elvira Fuente</a> for <a className="footer__link" rel="noopener noreferrer" href="https:www.adalab.es" target="_blank">Adalab</a></small>
            </footer>
        )
    }
}

export default Footer;