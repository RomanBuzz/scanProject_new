import * as React from "react";

function MainCarousel() {
    let group2Element;

    const carousel = () => {
        let arrowLeft = group2Element.querySelector('.main__group_2 .carousel__arrow.arrow_left');
        let arrowRight = group2Element.querySelector('.main__group_2 .carousel__arrow.arrow_right');
        let itemsGroup = group2Element.querySelector('.main__group_2 .tabs-collection');
        let items = group2Element.querySelectorAll('.main__group_2 .tabs-collection__item');
        let node;
        arrowRight.onclick = () => {
            node = items[0];
            items[0].remove();
            itemsGroup.appendChild(node);
            items = document.querySelectorAll('.main__group_2 .tabs-collection__item');
        }
        arrowLeft.onclick = () => {
            node = items[items.length - 1];
            items[items.length - 1].remove();
            itemsGroup.insertBefore(node, items[0]);
            items = document.querySelectorAll('.main__group_2 .tabs-collection__item');
        }
    }

    React.useEffect(() => {
        carousel();
    }, []);

    return (
        <div className="main__group_2" ref={(element) => { group2Element = element }}>
            <div className="group_name">Почему именно мы</div>
            <div className="carousel">
                <img className="carousel__arrow arrow_left" src={require('../images/arrow_left.svg')} alt="left arrow" />
                <div className="tabs-collection">
                    <div className="tabs-collection__item">
                        <img src={require('../images/carousel_01.svg')} alt="carousel item logo" />
                        <div className="text_info">
                            Высокая и оперативная скорость обработки заявки
                        </div>
                    </div>
                    <div className="tabs-collection__item">
                        <img src={require('../images/carousel_02.svg')} alt="carousel item logo" />
                        <div className="text_info">
                            Огромная комплексная база <br />данных, обеспечивающая объективный ответ на запрос
                        </div>
                    </div>
                    <div className="tabs-collection__item">
                        <img src={require('../images/carousel_03.svg')} alt="carousel item logo" />
                        <div className="text_info">
                            Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству
                        </div>
                    </div>
                    <div className="tabs-collection__item">
                        <img src={require('../images/carousel_02.svg')} alt="carousel item logo" />
                        <div className="text_info">
                            Блок 4: ещё какой-то классный текст о преимуществах...
                        </div>
                    </div>
                    <div className="tabs-collection__item">
                        <img src={require('../images/carousel_02.svg')} alt="carousel item logo" />
                        <div className="text_info">
                            Блок 5: ещё какой-то классный текст о преимуществах...
                        </div>
                    </div>
                </div>
                <img className="carousel__arrow arrow_right" src={require('../images/arrow_right.svg')} alt="right arrow" />
            </div>
        </div>
    );
}

export default MainCarousel;