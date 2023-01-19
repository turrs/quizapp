import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import React, { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt from 'jwt-decode';
import { useRouter } from 'next/router';
import {
  getAccessToken,
  saveAccessToken,
  saveUserLogin,
} from '@/states/User/action';
type LoginProps = {};

const Login = (props: LoginProps) => {
  const router = useRouter();
  const handleSuccess = (credentialResponse: any) => {
    const user: any = jwt(credentialResponse.credential);
    console.log(user);
    saveAccessToken(credentialResponse.credential);
    saveUserLogin(user);
    if (user !== null) {
      router.push('/');
    }
  };
  useEffect(() => {
    if (localStorage) {
      const token = getAccessToken();
      if (token !== null) {
        router.push('/');
      }
    }
  }, []);
  return (
    <div className="flex w-full bg-blue justify-center items-center h-screen">
      <GoogleLogin
        onSuccess={(credentialResponse) => handleSuccess(credentialResponse)}
        onError={() => {
          alert('Login Failed');
        }}
      />
    </div>
  );
};

export default Login;
