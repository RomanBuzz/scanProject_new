const requestButton = (formElement, setRequest) => {
    let formButton = formElement.querySelector('.form .form_button.inn.quantity.startDate.endDate');
    if (formButton) {
        let inn = formElement.querySelector('.form .group_1 .input_elem').value.replace(/[\s]+/g, '');
        let tonality = formElement.querySelector('.form .group_2 .input_elem').value;
        let limit = formElement.querySelector('.form .group_3 .input_elem').value;
        let startDate = formElement.querySelector('.form .group_4 .input_elem:nth-child(1)').value;
        let endDate = formElement.querySelector('.form .group_4 .input_elem:nth-child(2)').value;
        let maxFullness = formElement.querySelector('.form .checkbox_list #checkbox_01').checked;
        let inBusinessNews = formElement.querySelector('.form .checkbox_list #checkbox_02').checked;
        let onlyMainRole = formElement.querySelector('.form .checkbox_list #checkbox_03').checked;
        let onlyWithRiskFactors = formElement.querySelector('.form .checkbox_list #checkbox_04').checked;
        let excludeTechNews = !formElement.querySelector('.form .checkbox_list #checkbox_05').checked;
        let excludeAnnouncements = !formElement.querySelector('.form .checkbox_list #checkbox_06').checked;
        let excludeDigests = !formElement.querySelector('.form .checkbox_list #checkbox_07').checked;
        setRequest([startDate, endDate, inn, tonality, limit,
            maxFullness, inBusinessNews, onlyMainRole, onlyWithRiskFactors,
            excludeTechNews, excludeAnnouncements, excludeDigests]);
    }
}

export { requestButton };