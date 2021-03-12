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
                <span className={color}>Артем какашка</span>
            </div>
        </div>
    );
}