import { Provider } from 'react-redux';
import Layout from '@/components/Layout/Layout';
import store from '@/store';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
