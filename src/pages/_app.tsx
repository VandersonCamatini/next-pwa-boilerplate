import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps): React.ReactElement {
    return (
        <>
            <Head>
                <title>React Boilerplate</title>
                <link rel="shortcut icon" href="/public/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/public/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
                />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default App;
