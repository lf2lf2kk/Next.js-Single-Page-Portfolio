import Theme from '../styles/theme';
// import ScrollArrow from '../components/ScrollArrow'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
