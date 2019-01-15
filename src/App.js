import React, { Component } from 'react';
import './App.scss';
import NavigationLinks from './components/NavigationLinks/NavigationLinks';
import tourVideo from './assets/video/tour.mp4';
import tabooLogo from './assets/images/taboo-logo.png';
import tabooLogoSmall from './assets/images/taboo-logo-small.png';
import tabooPoster from './assets/images/taboo-poster2.jpeg';

class App extends Component {
    componentDidMount() {
        window.ymaps.ready(init);
        function init() {
            const myMap = new window.ymaps.Map("map", {
                center: [56.851850, 53.205250],
                zoom: 18
            });

            const placemark = new window.ymaps.Placemark(myMap.getCenter(), {
                balloonContentHeader: '<span>TABOO</span><br>' +
                    '<span class="description">Lounge Bar</span>',
                balloonContentBody: '<img src="/images/taboo-map-logo.jpeg"> <br/> ' +
                    '<span class="map-label--bold">Бронь столов:</span> ' +
                    '<a href="tel:+7-919-911-49-42">+7 (919) 911-49-42</a><br/>' +
                    '<span class="map-label--bold">Режим работы:</span> ПН-ЧТ, ВС с 14:00 до 2:00<br/>' +
                    '<span class="map-label--indent">ПТ-СБ с 14:00 до 4:00</span>',

                // balloonContentFooter: 'Информация предоставлена:<br/>OOO "TABOO Lounge Bar"',
                hintContent: 'TABOO Lounge Bar'
            });

            myMap.geoObjects.add(placemark);
            placemark.balloon.open();
        }
    }

    render() {

        return (
            <div className="App">
                <div className="video-bg">
                    <div className="overlay">
                        <div className="top-bar">
                            <span className="top-bar__forelock">
                                <div className="top-bar__forelock--bottom-margin">Работаем с 14:00 до 2:00</div>
                                <div>ПТ-СБ с 14:00 до 4:00</div>
                            </span>
                        </div>
                        <div className="overlay-logo">
                            <div className="overlay-logo__pic">
                                <img src={tabooLogo} alt="Taboo Logo"/>
                                <div>
                                    <a href="tel:+7-919-911-49-42" className="book-table">Забронировать стол</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <video  loop muted autoPlay poster={tabooPoster} className="video-bg__video">
                        <source src={tourVideo} type="video/mp4" />
                    </video>
                </div>

                <div className="content">
                    <h2>Немного о нас</h2>
                    <div className="description-container">
                        <a href="/images/taboo-menu.jpeg" className="taboo-menu" target="_blank">Меню</a>
                        <p>
                            Очень рады, что теперь Вы узнали о нас! О месте, где можно расслабиться или поработать в уединении, весело провести время с друзьями или назначить свидание!
                        </p>
                        <p>
                            "Taboo" - место, созданное с мыслью об одноименной новой элите общества. Которой важно своё окружение, комфорт, качество получаемых услуг.Мы ценим наших гостей! Вам остаётся только в этом убедиться...
                        </p>
                        <div>
                            <a href="tel:+7-919-911-49-42" className="book-table-link">Бронь столов +7 (919) 911-49-42</a>
                        </div>
                    </div>
                </div>

                <div className="content map-container indended">
                    <div id="map" style={{ height: '400px' }}></div>
                    <div className="our-address">Наш Адрес: г. Ижевск, ул. Карла Маркса, 242. Вход со стороны бара БК.</div>
                </div>
                <div className="content indended">
                    <NavigationLinks></NavigationLinks>
                </div>
                <div className="content indended">
                    <img src={tabooLogoSmall} alt="Taboo Logo"></img>
                </div>
                <div className="app-footer"></div>
            </div>
        );
    }
}

export default App;
