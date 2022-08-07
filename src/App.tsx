import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './ Header';


export function App() {
  return (
    <div className="flexbox">
      <section className="side">

      </section>
      <article className="main">
        <Header></Header>
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
