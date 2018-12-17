import React, { Component } from 'react';
import './App.scss';
import NavigationLinks from './components/NavigationLinks/NavigationLinks';

class App extends Component {
  componentDidMount() {
    console.log(window);
    window.ymaps.ready(init);
    function init() {
      // Создание карты.    
      const myMap = new window.ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [56.852030, 53.205077],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div>Taboo Lounge</div>
        <div className="content map-container">
          <div id="map" style={{ height: '400px' }}></div>
          <div className="our-address">Наш Адрес: Там-то там-то</div>
        </div>
        <div className="content">
          <NavigationLinks></NavigationLinks>
        </div>
      </div>
    );
  }
}

export default App;
