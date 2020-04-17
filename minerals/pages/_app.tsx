import '../styles/index.scss';

// This defualt export is required in a new `pages/_app.tsx` file
export default function App({ Component, pageProps }) {
    return <Component { ...pageProps } />
}