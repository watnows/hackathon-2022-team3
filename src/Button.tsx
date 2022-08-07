import React from 'react';

type kata = {
    text:string
}

export const Button = (props:kata) => {
    const click = () => {
        console.log(props.text)
    }

    return(
        <button onClick={click}>ボタン</button>
    )
}