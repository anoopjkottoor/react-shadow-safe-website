import logo from './logo.svg';
import './SplashScreen.css';
import MainLogo from '../src/assets/LOGO.svg'

function SplashScreen() {
    return (
        <div className="splash-screen-container is-flex is-justify-content-center is-align-items-center is-fullheight">
            <div className="animated-div center-title is-flex is-flex-direction-column is-justify-content-center is-align-items-center is-fullheight">
                <img src={MainLogo} width="200px" height="200px"></img>
                <div><span className="main-title-slim-splash">shadow</span><span className="main-title-thick-splash">safe</span></div>
            </div>
        </div>
    );
}

export default SplashScreen;
