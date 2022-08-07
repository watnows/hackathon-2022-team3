import './Liquredit.css'
import React, { useState } from 'react';
import React, { Component } from "react"
export const Liquredit = () => {
    const [name, setName] = useState('');
    const [addtexts, setTexts] = useState([]);
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleSubmit = () => {
        console.log(name);
    }
    const addTexts  = () =>{
        setTexts([[name, 1], ...addtexts])
    }


    return (
        <div className="flexbox">
            <section className="side">

            </section>
            <article className="main">
                <h1>サイト名</h1>
                <nav>
                    <ul>
                        <li><a href="/liqur">酒瓶</a></li>
                        <li><a href="/service">空瓶</a></li>
                        <li><a href="./users">ユーザ</a></li>
                        <li><a href="./reccomend">おすすめ</a></li>
                    </ul>
                </nav>
                <p>酒追加のページ</p>
                <p>お酒の名前</p>
                
            </article>
            <section className="side">
            </section>
        </div>
    )
}