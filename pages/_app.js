import '../styles/globals.css'
import HeadContent from "../components/global/Icon";
//IMPORT GLOBAL STYLING
import '../styles/Navbar.css';
import '../styles/Footer.css';
import '../styles/LandingPage.css';
import '../styles/Carousel.css';
import '../styles/OurGames.css';
import '../styles/Leaderboard.css';
import '../styles/Faq.css';
import '../styles/LoginForm.css';
import '../styles/RegisterForm.css';
import '../styles/Forgot.css';
import '../styles/Sidebar.css';
import '../styles/NavHome.css';
import '../styles/Content.css';
import '../styles/Profile.css';
import '../styles/RpsGame.css';
//IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
// IMPORT REDUX
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../app/store';
//IMPORT AOS
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HeadContent />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
