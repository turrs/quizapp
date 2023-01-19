import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../states';
import { GoogleOAuthProvider } from '@react-oauth/google';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="698514332811-09erk07b791tot0sqjb9v9253cvu32jt.apps.googleusercontent.com">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </GoogleOAuthProvider>
  );
}
