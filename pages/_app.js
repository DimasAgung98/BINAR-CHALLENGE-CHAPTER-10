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
//IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadContent />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
