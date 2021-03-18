import React, { useState} from 'react';
import news from './News.module.css';
import './News.css'

export function News() {
    let [color, setColor] = useState("gold")
    let press = () => setColor("red")


    return (
        <div className={news.content}>
            news
            <div>
                <button onClick={press}>нажми сюда</button>
                <span className={color}>Илья толстенький и толстый и камок грязи, жаба и свинья, а ткаже он самый толстый на свете</span>
            </div>
        </div>
    );
}