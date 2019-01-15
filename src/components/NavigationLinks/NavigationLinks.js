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
                        <a href="/">Главная</a>
                    </div>
                    <div className="links-column__option">
                        <a href="/images/taboo-menu.jpeg" target="_blank">Меню</a>
                    </div>
                </div>
                <div className="links-column">
                    <div className="links-column__header">
                        Соц Сети
                    </div>
                    <div className="links-column__option">
                        <a href="https://vk.com/taboo_lounge18" target="_blank" rel="noopener noreferrer">VK</a>
                    </div>
                    <div className="links-column__option">
                        <a href="https://www.instagram.com/taboo_lounge18/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
                <div className="links-column">
                    <div className="links-column__header">
                        Контакты
                    </div>
                    <div className="links-column__option">
                        <a href="mailto:taboolounge@yandex.ru" className="links-column__option--highlighted">taboolounge@yandex.ru</a>
                    </div>
                    <div className="links-column__option">
                        <a href="tel:+7-919-911-49-42" className="links-column__option--highlighted">+7 (919) 911-49-42</a>
                    </div>
                </div>
            </div>
        );
    }
}