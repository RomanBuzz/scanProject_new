import * as React from "react";
import { selectTariff } from "../lib/selectTariff";

function MainTariffs(props) {
    let group4Element;

    React.useEffect(() => {
        selectTariff(group4Element, props.isAuthorized);
    }, [props.isAuthorized]);

    return (
        <div className="main__group_4" ref={(element) => { group4Element = element }}>
            <div className="group_name">наши тарифы</div>
            <div className="items">
                <div className="tabs-collection">
                    <div className="tabs-collection__item">
                        <div className="tariff__header">
                            <div className="tariff_info">
                                <div className="tariff_name text_info_bold">Beginner</div>
                                <div className="tariff_description text_info">Для небольшого исследования</div>
                            </div>
                            <img className="tariff_image" src={require('../images/tariff_img_01.svg')} alt="tariff image" />
                        </div>
                        <div className="tariff__current">
                            <div className="current text_info">Текущий тариф</div>
                        </div>
                        <div className="tariff__price">
                            <div className="price text_info_bold">
                                <div className="price__new">799 ₽</div>
                                <div className="price__old">1 200 ₽</div>
                            </div>
                            <div className="price_info text_info">или 150 ₽/мес. при рассрочке на 24 мес.</div>
                        </div>
                        <div className="tariff_info">
                            <div className="tariff_info__header text_info_bold">В тариф входит:</div>
                            <div className="tariff_info__items text_info">
                                <div className="item">
                                    <img src={require('../images/check_mark.svg')} alt="check mark image" />
                                    <div>Безлимитная история запросов</div>
                                </div>
                                <div className="item">
                                    <img src={require('../images/check_mark.svg')} alt="check mark image" />
                                    <div>Безопасная сделка</div>
                                </div>
                                <div className="item">
                                    <img src={require('../images/check_mark.svg')} alt="check mark image" />
                                    <div>Поддержка 24/7</div>
                                </div>
                            </div>
                        </div>
                        <div className="tariff__button">
                            <button className="text_info">Подробнее</button>
                        </div>
                    </div>
                    <div className="tabs-collection__item">
                        <div className="tariff__header">
                            <div className="tariff_info">
                                <div className="tariff_name text_info_bold">Pro</div>
                                <div className="tariff_description text_info">Для HR и фрилансеров</div>
                            </div>
                            <img className="tariff_image" src={require('../images/tariff_img_02.svg')} alt="tariff image" />
                        </div>
                        <div className="tariff__current">
                            <div className="current text_info">Текущий тариф</div>
                        </div>
                        <div className="tariff__price">
                            <div className="price text_info_bold">
                                <div className="price__new">1 299 ₽</div>
                                <div className="price__old">2 600 ₽</div>
                            </div>
                            <div className="price_info text_info">или 279 ₽/мес. при рассрочке на 24 мес.</div>
                        </div>
                        <div className="tariff_info">
                            <div className="tariff_info__header text_info_bold">В тариф входит:</div>
                            <div className="tariff_info__items text_info">
                                <div className="item">
                                    <img src={require('../images/check_mark.svg')} alt="check mark image" />
                                    <div>Все пункты тарифа Beginner</div>
                                </div>
                                <div className="item">
                                    <img src={require('../images/check_mark.svg')} alt="check mark image" />
                                    <div>Экспорт истории</div>
                                </div>
                                <div className="item">
                                    <img src={require('../images/check_mark.svg')} alt="check mark image" />
                                    <div>Рекомендации по приоритетам</div>
                                </div>
                            </div>
                        </div>
                        <div className="tariff__button">
                            <button className="text_info">Подробнее</button>
                        </div>
                    </div>
                    <div className="tabs-collection__item">
                        <div className="tariff__header">
                            <div className="tariff_info">
                                <div className="tariff_name text_info_bold">Business</div>
                                <div className="tariff_description text_info">Для корпоративных клиентов</div>
                            </div>
                            <img className="tariff_image" src={require('../images/tariff_img_03.svg')} alt="tariff image" />
                        </div>
                        <div className="tariff__current">
                            <div className="current text_info">Текущий тариф</div>
                        </div>
                        <div className="tariff__price">
                            <div className="price text_info_bold">
                                <div className="price__new">2 379 ₽</div>
                                <div className="price__old">3 700 ₽</div>
                            </div>
                            <div className="price_info text_info"></div>
                        </div>
                        <div className="tariff_info">
                            <div className="tariff_info__header text_info_bold">В тариф входит:</div>
                            <div className="tariff_info__items text_info">
                                <div className="item">
                                    <img src={require('../images/check_mark.svg')} alt="check mark image" />
                                    <div>Все пункты тарифа Pro</div>
                                </div>
                                <div className="item">
                                    <img src={require('../images/check_mark.svg')} alt="check mark image" />
                                    <div>Безлимитное количество запросов</div>
                                </div>
                                <div className="item">
                                    <img src={require('../images/check_mark.svg')} alt="check mark image" />
                                    <div>Приоритетная поддержка</div>
                                </div>
                            </div>
                        </div>
                        <div className="tariff__button">
                            <button className="text_info">Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainTariffs;