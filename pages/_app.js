import '../styles/globals.css';
import layout from '../components/Layout';




function MyApp({ Component, pageProps }) {
  return <layout>
    <Component {...pageProps} />
    </layout>
    
}

export default MyApp
