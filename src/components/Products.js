import React, {Component} from 'react';
import {Category} from './Category';

export class Products extends Component {
    constructor(props) {
        super(props);

        this.loop = this.loop.bind(this);
    }

    categoryItem = [
        'Розница по оптовой цене',
        'Новинки',
        'Зимние куртки, комбинизоны',
        'Демисезонные куртки, ветровки, жилетки',
        'Пайты, толстовки, регланы, туники',
        'Брюки',
        'Джинсовая одежда',
        'Спортивные костюмы',
        'Спортивные брюки',
        'Костюмы, комплекты, наборы',
        'Лосины и легинсы для девочок',
        'Платья для девочок',
        'Колготки, носки'
    ];

    product = {
        first: {
            price: 228,
            title: 'first item',
            src: '../images/img4.jpg'
        },
        second: {
            price: 1488,
            title: 'second item',
            src: '../images/img4.jpg'
        },
        third: {
            price: 709,
            title: 'third item',
            src: '../images/img4.jpg'
        },
        fourth: {
            price: 2809,
            title: 'fourth item',
            src: '../images/img4.jpg'
        }
    };

    loop() {
        let prod = this.product,
            jsx;

        for(let key in prod) {
            if(prod.hasOwnProperty(key)) {
                return jsx += <h2>{prod[key].price}</h2>;
            }
        }
    }

    render() {
        return (
            <main className="products">
                <h1>Наш сайт is the best of the best 'cause Senya + XSS = null</h1>
                <p>Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет
                    выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям.
                    С другой стороны укрепление и развитие структуры позволяет оценить значение систем массового участия.
                    С другой стороны сложившаяся структура организации позволяет выполнять важные задания по разработке
                    модели развития. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм
                    деятельности способствует подготовки и реализации модели развития.</p>
                <section>{this.loop()}</section>
            </main>
        );
    }
}