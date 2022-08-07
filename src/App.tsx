import React from 'react';
import { Header } from './ Header';
import './App.css';
import './FirebaseConfig'

export function App() {
  return (
    <div>
    <Header></Header>

    <p>酒瓶置き場</p>
        
    <a href='./liquoredit'>お酒の追加</a>
    <a href='./liquorslider'>酒スライダー</a>
    </div>
  );
}

export default App;
