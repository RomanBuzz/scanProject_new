const selectTariff = (group4Element, isAuthorized) => {
    let items = group4Element.querySelectorAll('.main__group_4 .tabs-collection__item');
    if (isAuthorized) {
        let randomTariff = Math.floor(Math.random() * 3);
        if (randomTariff == 0) {
            items[0].querySelector('.tariff__button button').innerHTML = "Перейти в личный кабинет";
            items[0].classList.add('selected');
            items[1].querySelector('.tariff__button button').innerHTML = "Подробнее";
            items[1].classList.remove('selected');
            items[2].querySelector('.tariff__button button').innerHTML = "Подробнее";
            items[2].classList.remove('selected');
        } else if (randomTariff == 1) {
            items[0].querySelector('.tariff__button button').innerHTML = "Подробнее";
            items[0].classList.remove('selected');
            items[1].querySelector('.tariff__button button').innerHTML = "Перейти в личный кабинет";
            items[1].classList.add('selected');
            items[2].querySelector('.tariff__button button').innerHTML = "Подробнее";
            items[2].classList.remove('selected');
        } else if (randomTariff == 2) {
            items[0].querySelector('.tariff__button button').innerHTML = "Подробнее";
            items[0].classList.remove('selected');
            items[1].querySelector('.tariff__button button').innerHTML = "Подробнее";
            items[1].classList.remove('selected');
            items[2].querySelector('.tariff__button button').innerHTML = "Перейти в личный кабинет";
            items[2].classList.add('selected');
        }
    } else {
        items[0].querySelector('.tariff__button button').innerHTML = "Подробнее";
        items[0].classList.remove('selected');
        items[1].querySelector('.tariff__button button').innerHTML = "Подробнее";
        items[1].classList.remove('selected');
        items[2].querySelector('.tariff__button button').innerHTML = "Подробнее";
        items[2].classList.remove('selected');
    }
}

export { selectTariff };