import React from 'react';
import logo from './logo.svg';
import './App.css';
import './FirebaseConfig'
import { useState } from 'react';
import Modal from './Modal';
import { Header } from './ Header';


export function App() {
  const [modal, setModal] = useState(false);

  const Toggle = () => setModal(!modal);

  return (
    <div className="flexbox">
      <section className="side">

      </section>
      <article className="main">
        <Header></Header>
        <p>酒瓶置き場</p>

        <a href='./liquoredit'>お酒の追加</a>
        <a href='./liquorslider'>酒スライダー</a>
        <div className='modal'>
          <button className='modalbutton' onClick={() => Toggle()}>
            Modal
          </button>

          <Modal show={modal} close={Toggle} />
        </div>
      </article>
      <section className="side">
      </section>
    </div>


  );
}

export default App;
