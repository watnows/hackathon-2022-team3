import './Liquoredit.css'
import React, { useState } from 'react';
export const Liquoredit = () => {
    const [name, setName] = useState('');
    const [addtexts, setTexts] = useState([]);

    return (
        <div className="flexbox">
            <section className="side">

            </section>
            <article className="main">
                <h1>サイト名</h1>
                <nav>
                    <ul>
                        <li><a href="/liquor">酒瓶</a></li>
                        <li><a href="/service">空瓶</a></li>
                        <li><a href="./users">ユーザ</a></li>
                        <li><a href="./reccomend">おすすめ</a></li>
                    </ul>
                </nav>
                <p>酒追加のページ</p>
                
            </article>
            <section className="side">
            </section>
        </div>
    )
}