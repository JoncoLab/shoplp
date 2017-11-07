import React, {Component} from 'react';
import {Item} from './Item';


export class Category extends Component {
    render() {
        return (
            <section className="category">
                <div className="category-image">
                    <span className="add-info">
                        <span>> Вот такая фигня</span>
                        <span>> Да и такая тоже есть</span>
                        <span>> LVL of Developers' imagination = 3 * 10<sup>8</sup> thoughts/second</span>
                    </span>
                    <img alt="Фото" src="../images/bg.jpg"/>
                </div>
                <h3 className="category-caption">{this.props.text}</h3>
            </section>
        );
    }
}