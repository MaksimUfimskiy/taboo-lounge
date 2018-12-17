import React from 'react';
import './NavigationLinks.scss';

export default class NavigationLinks extends React.Component {
    render() {
        return (
            <div className="links-container">
                <div className="links-column">
                    <div className="links-column__header">
                        Навигация
                    </div>
                    <div className="links-column__option">
                        Главная
                    </div>
                    <div className="links-column__option">
                        Меню
                    </div>
                </div>
                <div className="links-column">
                    <div className="links-column__header">
                        Соц Сети
                    </div>
                    <div className="links-column__option">
                        Вконтакте
                    </div>
                    <div className="links-column__option">
                        Instagram
                    </div>
                </div>
                <div className="links-column">
                    <div className="links-column__header">
                        Контакты
                    </div>
                    <div className="links-column__option">
                        xxxxxxxxx@gmail.com
                    </div>
                    <div className="links-column__option">
                        +7 (xxx) xxx-xx-xx
                    </div>
                </div>
            </div>
        );
    }
}