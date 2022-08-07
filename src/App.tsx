import React from 'react';
import logo from './logo.svg';
import './App.css';


export function App() {
  return (
    <div className="flexbox">
      <section className="side">

      </section>
      <article className="main">
        <h1>サイト名</h1>

        <nav>
          <ul>
            <li><a href="liquor">酒瓶</a></li>
            <li><a href="/service">空瓶</a></li>
            <li><a href="./users">ユーザ</a></li>
            <li><a href="./reccomend">おすすめ</a></li>
          </ul>
        </nav>
        <p>酒瓶置き場</p>
        
        <a href='./liquoredit'>お酒の追加</a>
        <a href='./liquorslider'>酒スライダー</a>
        
      </article>
      <section className="side">
      </section>
    </div>


  );
}

export default App;
