import React, {Component} from 'react';

export class Header extends Component {
    render() {
        return (
            <header>
                <span className="phone-number">+38-050-228-14-88</span>
                <div className="main-menu">
                    <span className="menu-item">РОЗНИЦА по ОПТОВОЙ ЦЕНЕ!</span>
                    <span className="menu-item">Новинки!</span>
                    <span className="menu-item">Зимние куртки, комбинизоны</span>
                    <span className="menu-item">Демисезонные куртки, ветровки, жилетки</span>
                    <span className="menu-item">Пайты, толстовки, регланы, туники</span>
                    <span className="menu-item">Брюки</span>
                    <span className="menu-item">Джинсовая одежда</span>
                    <span className="menu-item">Спортивные костюмы</span>
                    <span className="menu-item">Спортивные брюки</span>
                    <span className="menu-item">Костюмы, комплекты, наборы</span>
                    <span className="menu-item">Лосины и легинсы для девочок</span>
                    <span className="menu-item">Платья для деовочок</span>
                    <span className="menu-item">Колготы, носки</span>
                </div>
            </header>
        );
    }
}