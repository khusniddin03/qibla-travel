import Container from "../container/container";
import LanguageSelect from "../language-select/languageSelect";
import Logo from "../logo/logo";
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="header__wrap">
                    <div className="header__left">
                        <Logo />
                    </div>
                    <div className="header__right">
                        <LanguageSelect />
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;