import React, { useEffect, useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';

import 'firebase/auth'
import './FirebaseConfig'


const SignIn = () => {
  const SignInFunc = async () => {
    //   // Googleプロバイダオブジェクトのインスタンスを作成
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    // await signInWithPopup(auth, provider)

    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        console.log(credential, token, user);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth();
    const { email, password } = event.target.elements;
    auth.signInWithEmailAndPassword(email.value, password.value);
  };

  return (
    <div>
      <div className="login">
        <h1>ログイン</h1>
      </div>
      <div className="signin_button">
        <form onSubmit={handleSubmit}>
          <div>
            <label>メールアドレス</label>
            <input name="email" type="email" placeholder="email" />
          </div>
          <div>
            <label>パスワード</label>
            <input name="password" type="password" placeholder="password" />
          </div>
          <div>
            <button>ログイン</button>
          </div>
          <div>
            ユーザ登録は<Link to={'/signup'}>こちら</Link>から
          </div>
        </form>
        <button onClick={() => SignInFunc()}>Googleでログイン</button>
      </div>
    </div>
  );
}

export default SignIn