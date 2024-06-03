import * as React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Main.css";

import MainCarousel from "./MainCarousel";
import MainTariffs from "./MainTariffs";

function Main(props) {
    const navigate = useNavigate();

    return (
        <>
            <div className="main__group_1">
                <div className="column column--left">
                    <h1 className="group_name">
                        сервис по поиску <br />публикаций <br />о компании <br />по его ИНН
                    </h1>
                    <div className="text_info">
                        Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                    </div>
                    {props.isAuthorized ? (
                        <button className="text_info_bold" onClick={() => navigate('search', { replace: false })}>Запросить данные</button>
                    ) : ("")}
                </div>
                <div className="column column--right">
                    <img src={require('../images/main_group_1_logo.svg')} alt="main logo" />
                </div>
            </div >

            <MainCarousel />

            <div className="main__group_3">
                <img src={require('../images/group_3.svg')} alt="image" />
            </div>

            <MainTariffs isAuthorized={props.isAuthorized} />

        </>
    );
}

export default Main;