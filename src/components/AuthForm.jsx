import * as React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/scanInterfax";
import { testLogin, testPassword, wrongPassword } from "../lib/validation";

import "../styles/AuthForm.css";

function AuthForm(props) {
    let formElement;
    const navigate = useNavigate();

    const formFunc = () => {
        let authButton = formElement.querySelector('.form .form_auth_button.login.password');
        if (authButton) {
            login(formElement.querySelector('.form .login_input').value,
                formElement.querySelector('.form .password_input').value,
                () => props.setAuthorized(true),
                () => navigate('/', { replace: false }),
                () => wrongPassword(formElement));
            formElement.querySelector('.form .login_input').value = "";
            formElement.querySelector('.form .password_input').value = "";
            authButton.classList.remove('login');
            authButton.classList.remove('password');
        }
    }

    return (
        <div className="auth__page">
            <div className="column column--left">
                <h1 className="service_name group_name">
                    Для оформления подписки <br />на тариф, необходимо <br />авторизоваться.
                </h1>
                <img src={require('../images/auth_characters.svg')} alt="auth logo" />
            </div>
            <div className="column column--right">
                <img className="lock_img" src={require('../images/auth_lock.svg')} alt="authform logo" />
                <div className="form_auth_block">
                    <div className="form_auth_block_content">
                        <div className="form_auth_block_head text_info">
                            <div className="block_head block_head--left">
                                <div>Войти</div>
                                <img src={require('../images/rectangle24.svg')} alt="line image" />
                            </div>
                            <div className="block_head block_head--right">
                                <div>Зарегистрироваться</div>
                                <img src={require('../images/rectangle25.svg')} alt="line image" />
                            </div>
                        </div>
                        <div className="form text_info" ref={(element) => { formElement = element }}>
                            <label className="info_label">Логин или номер телефона:</label>
                            <input className="login_input" type="text" name="auth_name"
                                onKeyUpCapture={() => testLogin(formElement)} />
                            <div className="login_error">Введите корректные данные</div>
                            <label className="info_label">Пароль:</label>
                            <input className="password_input" type="password" name="auth_pass"
                                onKeyUpCapture={() => testPassword(formElement)} />
                            <div className="password_error">Неправильный пароль</div>
                            <button className="form_auth_button text_info_bold" onClick={formFunc}>Войти</button>
                            <a>Восстановить пароль</a>
                        </div>
                        <div className="social_media_auth">
                            <div className="info_label text_info">Войти через:</div>
                            <div className="social_media_logo">
                                <img src={require('../images/auth_google.svg')} alt="google auth" />
                                <img src={require('../images/auth_facebook.svg')} alt="facebook auth" />
                                <img src={require('../images/auth_yandex.svg')} alt="yandex auth" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AuthForm;