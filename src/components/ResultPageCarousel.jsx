import * as React from "react";
import { numStrTag } from "../lib/dataProcessing";

function ResultPageCarousel(props) {
    let group2Element;

    const carousel = () => {
        if (props.isLoaded != false & props.entries > 0) {
            let arrowLeft = group2Element.querySelector('.result_page__group_2 .carousel__arrow.arrow_left');
            let arrowRight = group2Element.querySelector('.result_page__group_2 .carousel__arrow.arrow_right');
            let itemsGroup = group2Element.querySelector('.result_page__group_2 .tabs-carousel');
            let items = group2Element.querySelectorAll('.result_page__group_2 .tabs-collection__item');
            let node;
            if (items.length > 1) {
                arrowRight.onclick = () => {
                    node = items[0];
                    items[0].remove();
                    itemsGroup.appendChild(node);
                    items = document.querySelectorAll('.result_page__group_2 .tabs-collection__item');
                }
                arrowLeft.onclick = () => {
                    node = items[items.length - 1];
                    items[items.length - 1].remove();
                    itemsGroup.insertBefore(node, items[0]);
                    items = document.querySelectorAll('.result_page__group_2 .tabs-collection__item');
                }
            }
        }
    }

    React.useEffect(() => {
        if (props.isLoaded != false) {
            carousel();
        }
    }, [props.isLoaded]);

    return (
        <div className="result_page__group_2" ref={(element) => { group2Element = element }}>
            <div className="group_header">
                <div className="group_name">Общая сводка</div>
                <div className="entries_number text_info">
                    Найден{numStrTag(props.entries, "", "о", "о")} {props.entries.toLocaleString()} вариант{numStrTag(props.entries, "", "а", "ов")}
                </div>
            </div>
            <div className="carousel">
                <img className="carousel__arrow arrow_left" src={require('../images/arrow_right_icons8.svg')} alt="left arrow" />
                <div className="tabs-collection">
                    <div className="tabs-description__item text_info_bold">
                        <div>
                            Период
                        </div>
                        <div>
                            Всего
                        </div>
                        <div>
                            Риски
                        </div>
                    </div>
                    <div className="tabs-carousel">
                        {props.isLoaded ?
                            (props.isLoaded.map((result) => (
                                <div key={result.date + result.all + result.risk} className="tabs-collection__item text_info">
                                    <div>
                                        <div>
                                            {result.date.toLocaleDateString()}
                                        </div>
                                        <div>
                                            {result.all}
                                        </div>
                                        <div>
                                            {result.risk}
                                        </div>
                                    </div>
                                    <img
                                        src={require('../images/rectangle36.svg')}
                                        alt="separator"
                                    />
                                </div>
                            ))) :
                            (
                                <div className="tabs-loading">
                                    <img
                                        src={require('../images/loading.svg')}
                                        alt="loading image"
                                    />
                                    <div className="text_info">Загружаем данные</div>
                                </div>
                            )}
                    </div>
                </div>
                <img className="carousel__arrow arrow_right" src={require('../images/arrow_right_icons8.svg')} alt="right arrow" />
            </div>
        </div>
    );
}

export default ResultPageCarousel;