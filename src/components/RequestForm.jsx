import * as React from "react";
import IMask from 'imask';
import { testInn, testQuantity, testDate } from "../lib/validation";
import { requestButton } from "../lib/requestButton";

import "../styles/RequestForm.css";

import ResultPage from "./ResultPage";

function RequestForm() {
    let [request, setRequest] = React.useState(false);
    let formElement;

    React.useEffect(() => {
        if (request == false) {
            IMask(formElement.querySelector('.form .group_1 .input_elem'), { mask: '00 000 000 00' });
            formElement.querySelector('.form .checkbox_list #checkbox_01').checked = true;
            formElement.querySelector('.form .checkbox_list #checkbox_02').checked = true;
            formElement.querySelector('.form .checkbox_list #checkbox_03').checked = true;
            formElement.querySelector('.form .checkbox_list #checkbox_06').checked = true;
        }
    }, [request]);

    return (
        <>
            {request != false ? (<ResultPage request={request} setRequest={setRequest} />)
                :
                (
                    <div className="request__page">
                        <div className="block block--top">
                            <h1 className="service_name group_name">
                                Найдите необходимые данные в пару кликов.
                            </h1>
                            <div className="text_info">
                                Задайте параметры поиска. <br />Чем больше заполните, тем точнее поиск
                            </div>
                            <img className="request_page_img_1" src={require('../images/request_page_img_1.svg')} alt="request page image 1" />
                            <img className="request_page_img_2" src={require('../images/request_page_img_2.svg')} alt="request page image 2" />
                        </div>
                        <div className="block block--bottom">
                            <div className="form_block">
                                <div className="form" ref={(element) => { formElement = element }}>
                                    <div className="column column--left">
                                        <div className="info_group group_1 text_info">
                                            <label className="label_group">
                                                <div className="elem_1">ИНН компании</div>
                                                <div className="elem_2">*</div>
                                            </label>
                                            <input className="input_elem elem_1" type="text" name="inn" placeholder="10 цифр"
                                                onKeyUpCapture={() => testInn(formElement)} />
                                            <div className="inn_error error_text">Введите корректные данные</div>
                                            <div className="inn_empty error_text">Обязательное поле</div>
                                        </div>
                                        <div className="info_group group_2 text_info">
                                            <label>Тональность</label>
                                            <select className="input_elem elem_1" name="tonality" id="tonality-select">
                                                <option value="any">Любая</option>
                                                <option value="negative">Негативная</option>
                                                <option value="positive">Позитивная</option>
                                            </select>
                                        </div>
                                        <div className="info_group group_3 text_info">
                                            <label className="label_group">
                                                <div className="elem_1">Количество документов в выдаче</div>
                                                <div className="elem_2">*</div>
                                            </label>
                                            <input className="input_elem elem_1" type="text" name="doc_number" placeholder="От 1 до 1000"
                                                onKeyUpCapture={() => testQuantity(formElement)} />
                                            <div className="quantity_error error_text">Введите корректные данные</div>
                                            <div className="quantity_empty error_text">Обязательное поле</div>
                                        </div>
                                        <div className="info_group group_4 text_info">
                                            <label className="label_group">
                                                <div className="elem_1">Диапазон поиска</div>
                                                <div className="elem_2">*</div>
                                            </label>
                                            <div>
                                                <input className="input_elem elem_2" type="date"
                                                    name="start_date" placeholder="Дата начала"
                                                    onChange={() => testDate(formElement)} />
                                                <input className="input_elem elem_2" type="date"
                                                    name="finish_date" placeholder="Дата конца"
                                                    onChange={() => testDate(formElement)} />
                                            </div>
                                            <div className="range_error error_text">Введите корректные данные</div>
                                            <div className="range_empty error_text">Обязательное поле</div>
                                        </div>
                                    </div>
                                    <div className="column column--right">
                                        <div className="checkbox_list">
                                            <div>
                                                <input type="checkbox" id="checkbox_01" name="checkbox_01" />
                                                <label className="info_label text_info" htmlFor="checkbox_01">Признак максимальной полноты</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="checkbox_02" name="checkbox_02" />
                                                <label className="info_label text_info" htmlFor="checkbox_02">Упоминания в бизнес-контексте</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="checkbox_03" name="checkbox_03" />
                                                <label className="info_label text_info" htmlFor="checkbox_03">Главная роль в публикации</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="checkbox_04" name="checkbox_04" />
                                                <label className="info_label text_info" htmlFor="checkbox_04">Публикации только с риск-факторами</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="checkbox_05" name="checkbox_05" />
                                                <label className="info_label text_info" htmlFor="checkbox_05">Включать технические новости рынков</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="checkbox_06" name="checkbox_06" />
                                                <label className="info_label text_info" htmlFor="checkbox_06">Включать анонсы и календари</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="checkbox_07" name="checkbox_07" />
                                                <label className="info_label text_info" htmlFor="checkbox_07">Включать сводки новостей</label>
                                            </div>
                                        </div>
                                        <div className="button_block">
                                            <div>
                                                <button className="form_button text_info_bold"
                                                    onClick={() => requestButton(formElement, setRequest)}>Поиск</button>
                                                <div className="text_info">* Обязательные к заполнению поля</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="request_page_img_3">
                                <img src={require('../images/request_page_img_3.svg')} alt="request page image 3" />
                            </div>
                        </div>
                    </div >
                )}
        </>
    );
}

export default RequestForm;