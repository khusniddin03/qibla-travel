import { Link } from "react-router-dom";
import logo from '../../assets/logo.webp';
import './logo.css';
import { useAppContext } from "../../context/appContext";

const Logo = () => {
    const { lang } = useAppContext();

    return (
        <Link className="logo" to={`/${lang}`}>
            <img src={logo} alt="logo-image" />
        </Link>
    );
}

export default Logo;