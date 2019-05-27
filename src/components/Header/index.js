import React from 'react';
import './styles.scss';

class Header extends React.Component {
    render() {
        return (
            <header className="page__header">
                <img alt="harry potter's logo" className="header__image" src="https://pngriver.com/wp-content/uploads/2018/03/Download-Harry-Potter-Logo-PNG-Photos-265.png"/>
                <h1 className="header__title">Harry Potter's characters Directory</h1>
            </header>
        )
    }
}

export default Header;