import React from 'react';
import { Header } from './ Header';
import './App.css';
import './FirebaseConfig'
import { useState } from 'react';
import Modal from './Modal';
export function App() {
  const [modal, setModal] = useState(false);

  const Toggle = () => setModal(!modal);

  return (
    <div>
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
    </div>

    
  );
}

export default App;
