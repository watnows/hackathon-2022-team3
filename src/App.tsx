import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MatterStepOne} from './matterpractice'

export function App() {
  return (
    <div className="flexbox">
      <MatterStepOne></MatterStepOne>
      <section className="side">

      </section>
      <article className="main">
        <h1>サイト名</h1>

        <nav>
          <ul>
            <li><a href="liqur">酒瓶</a></li>
            <li><a href="/service">空瓶</a></li>
            <li><a href="./users">ユーザ</a></li>
            <li><a href="./reccomend">おすすめ</a></li>
          </ul>
        </nav>
        <p>酒瓶置き場</p>
        <button>酒追</button>
        <br></br>
        
        
      </article>
      <section className="side">
      </section>
    </div>


  );
}

export default App;
