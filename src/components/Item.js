import React, {Component} from 'react';

export class Item extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="item">
                <Gallery/>
                <div className="item-main">
                    <h2 className="item-caption">Some info bla bla bla...</h2>
                    <span className="item-price">Infinity грн.</span>
                    <span className="item-min-order">-Infinity шт.</span>
                    <span className="item-code">C-072809</span>
                </div>
                <ItemInfo/>
            </section>
        );
    }
}

class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <div className="gallery-arrows">
                    <span className="arrow-left">♥</span>
                    <span className="arrow-right">♦</span>
                </div>
                <img className="gallery-item active" src="#" alt="Фото товара"/>
                <img className="gallery-item" src="#" alt="Фото товара"/>
                <img className="gallery-item" src="#" alt="Фото товара"/>
                <img className="gallery-item" src="#" alt="Фото товара"/>
            </div>
        );
    }
}

class ItemInfo extends Component {
    render() {
        return (
            <div className="item-info">
                <nav className="info-menu">
                    <span className="description-title">Описание</span>
                    <span className="char-title">Характеристики</span>
                    <span className="order-title">Информация для заказа</span>
                </nav>
                <section className="description-box">D</section>
                <section className="char-box">C</section>
                <section className="order-box">O</section>
            </div>
        );
    }
}