import React, { useState } from "react";
import "./Liquoredit.css";

export const Liquoredit = () => {
    const [text, setText] = useState("");

    /* ↓state変数「addText」を定義 */
    const [addText, setAddText] = useState("");
    const [addtexts, setTexts] = useState([""]);

    /* ↓関数onClickAddTextを定義 */
    const onClickAddText = () => {
        setAddText(text);
        setTexts([text, ...addtexts]);
    }

    return (
        <div className="App">
            <input
                value={text}
                onChange={(event) => setText(event.target.value)}
            />

            {/* ↓buttonを追加 */}
            <button onClick={onClickAddText}>追加</button>

            <p>リアルタイム：{text}</p>

            {/* ↓pタグを追加 */}
            <p>ボタンクリック：{addText}</p>
            <ul>
                {addtexts.map(
                    (value, key) => 
                    <li key={key}>{value}</li>)}
            </ul>

        </div>
    );
};