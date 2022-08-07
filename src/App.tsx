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
            <li><a href="#">HOME</a></li>
            <li><a href="/service">サービス紹介</a></li>
            <li><a href="#">最新情報</a></li>
            <li><a href="#">ブログ</a></li>
            <li><a href="#">お問い合わせ</a></li>
          </ul>
        </nav>


      </article>
      <section className="side">
      </section>
    </div>
  );
}

export default App;
