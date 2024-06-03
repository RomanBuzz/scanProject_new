import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout, info } from "../services/scanInterfax";

import "../styles/Header.css";

function Header(props) {
    let [isLoaded, setLoaded] = React.useState(false);
    let [accountInfo, setAccountInfo] = React.useState([]);
    let headerElement;

    const navigate = useNavigate();

    const menuButton = () => {
        headerElement.querySelector('header.header__content .mobile-menu').classList.add('active');
    }

    const menuCloseButton = () => {
        headerElement.querySelector('header.header__content .mobile-menu').classList.remove('active');
    }

    React.useEffect(() => {
        if (props.isAuthorized) {
            info().then(data => {
                if (data) {
                    setLoaded(true);
                    setAccountInfo([data.eventFiltersInfo.usedCompanyCount, data.eventFiltersInfo.companyLimit]);
                }
            });
        }
    }, [props.isAuthorized]);

    return (
        <header id="home" className="header__content" ref={(element) => { headerElement = element }}>
            <div className="mobile-menu">
                <div className="header__logo">
                    <Link to="/" >
                        <img
                            src={require('../images/logo_footer_scan.png')}
                            alt="header logo"
                            onClick={menuCloseButton}
                        />
                    </Link>
                    <img
                        src={require('../images/close-icon.svg')}
                        alt="close button"
                        onClick={menuCloseButton}
                    />
                </div>
                <div className="header__buttons text_info">
                    <Link to="/" onClick={menuCloseButton} className="first_link">Главная</Link>
                    <Link to="/" onClick={menuCloseButton} className="second_link">Тарифы</Link>
                    <Link to="/" onClick={menuCloseButton} className="third_link">FAQ</Link>
                    {props.isAuthorized ?
                        (
                            <>
                                <Link to="search" onClick={menuCloseButton} className="fourth_link">Запросить данные</Link>
                                <button
                                    className="text_info_bold"
                                    onClick={() => { logout(); props.setAuthorized(false); setLoaded(false), menuCloseButton() }}
                                >Выйти</button>
                            </>
                        )
                        :
                        (
                            <>
                                <Link to="auth" onClick={menuCloseButton} className="fourth_link">Зарегистрироваться</Link>
                                <button
                                    className="text_info_bold"
                                    onClick={() => { navigate('auth', { replace: false }), menuCloseButton() }}
                                >Войти</button>
                            </>
                        )
                    }
                </div>
            </div>
            <div className="column column--left">
                <div className="header__logo">
                    <Link to="/" >
                        <img
                            src={require('../images/logo_header_scan.png')}
                            alt="header logo"
                        />
                    </Link>
                </div>
                <div className="column column--center">
                    <div className="header__buttons">
                        <Link to="/" >Главная</Link>
                        <Link to="/" className="button--right">Тарифы</Link>
                        <Link to="/" className="button--right">FAQ</Link>
                    </div>
                </div>
            </div>
            <div className="column column--mobile">
                <img
                    src={require('../images/menu-icon.svg')}
                    alt="menu button"
                    onClick={menuButton}
                />
            </div>
            {props.isAuthorized ?
                (
                    <>
                        <div className="column column--authorized">
                            <div className="name-block">
                                <div>Алексей А.</div>
                                <Link to="/" onMouseDown={() => { logout(); props.setAuthorized(false); setLoaded(false) }}>Выйти</Link>
                            </div>
                            <div className="image-block">
                                <img
                                    src={require('../images/avatar.png')}
                                    alt="user avatar"
                                />
                            </div>
                        </div>
                        <div className="column column--loading">
                            {isLoaded ?
                                (
                                    <div className="company--line">
                                        <div className="name--column">
                                            <div className="first--element">Использовано компаний</div>
                                            <div className="second--element">Лимит по компаниям</div>
                                        </div>
                                        <div className="value--column">
                                            <div className="first--element">{accountInfo[0]}</div>
                                            <div className="second--element">{accountInfo[1]}</div>
                                        </div>
                                    </div>
                                ) :
                                (
                                    <img
                                        src={require('../images/loading.svg')}
                                        alt="loading image"
                                    />
                                )}
                        </div>
                    </>
                ) :
                (
                    <div className="column column--right">
                        <div className="header__buttons">
                            <Link to="auth" className="registration_link">Зарегистрироваться</Link>
                            <img
                                src={require('../images/rectangle7.svg')}
                                alt="registration separator"
                                className="button--right"
                            />
                            <button className="button--right" onClick={() => navigate('auth', { replace: false })}>Войти</button>
                        </div>
                    </div>
                )}
        </header>
    );
}

export default Header;