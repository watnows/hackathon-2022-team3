import React from 'react';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import 'firebase/auth'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email.value, password.value);
    };
    const handleChangeEmail = (event: any) => {
        setEmail(event.currentTarget.value);
    };
    const handleChangePassword = (event: any) => {
        setPassword(event.currentTarget.value);
    };

    return (
        <div>
            <h1>ユーザ登録</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>メールアドレス</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={(event) => handleChangeEmail(event)}
                    />
                </div>
                <div>
                    <label>パスワード</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={(event) => handleChangePassword(event)}
                    />
                </div>
                <div>
                    <button>登録</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;