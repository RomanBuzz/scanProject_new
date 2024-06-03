const testLogin = (formElement) => {
    let loginInput = formElement.querySelector('.form .login_input');
    let loginError = formElement.querySelector('.form .login_error');
    let authButton = formElement.querySelector('.form .form_auth_button');
    let login = loginInput.value;
    if (login.length < 1) {
        loginInput.classList.add('error');
        loginError.classList.add('error');
        authButton.classList.remove('login');
    } else {
        loginInput.classList.remove('error');
        loginError.classList.remove('error');
        authButton.classList.add('login');
    }
}

const testPassword = (formElement) => {
    let passwordInput = formElement.querySelector('.form .password_input');
    let passwordError = formElement.querySelector('.form .password_error');
    let authButton = formElement.querySelector('.form .form_auth_button');
    let password = passwordInput.value;
    passwordInput.classList.remove('error');
    passwordError.classList.remove('error');
    if (password.length < 1) {
        authButton.classList.remove('password');
    } else {
        authButton.classList.add('password');
    }
}

const wrongPassword = (formElement) => {
    let passwordInput = formElement.querySelector('.form .password_input');
    let passwordError = formElement.querySelector('.form .password_error');
    passwordInput.classList.add('error');
    passwordError.classList.add('error');
}

const testInn = (formElement) => {
    let asterisk = formElement.querySelector('.form .group_1 .label_group .elem_2');
    let innInput = formElement.querySelector('.form .group_1 .input_elem');
    let innError = formElement.querySelector('.form .inn_error');
    let innEmpty = formElement.querySelector('.form .inn_empty');
    let formButton = formElement.querySelector('.form .form_button');
    let value = innInput.value.replace(/[\s]+/g, '');
    if (value.length == 0) {
        asterisk.classList.add('error');
        innInput.classList.add('error');
        innError.classList.remove('error');
        innEmpty.classList.add('error');
        formButton.classList.remove('inn');
    } else if (typeof value !== 'string' || value.length !== 10 || /[^0-9]+/.test(value) ||
        !(Number(value[9]) === (value.split('').slice(0, -1)
            .reduce(
                (summ, symbol, index) =>
                    [2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + summ,
                0)
            % 11) % 10)
    ) {
        asterisk.classList.add('error');
        innInput.classList.add('error');
        innError.classList.add('error');
        innEmpty.classList.remove('error');
        formButton.classList.remove('inn');
    } else {
        asterisk.classList.remove('error');
        innInput.classList.remove('error');
        innError.classList.remove('error');
        innEmpty.classList.remove('error');
        formButton.classList.add('inn');
    }
}

const testQuantity = (formElement) => {
    let asterisk = formElement.querySelector('.form .group_3 .label_group .elem_2');
    let quantityInput = formElement.querySelector('.form .group_3 .input_elem');
    let quantityError = formElement.querySelector('.form .quantity_error');
    let quantityEmpty = formElement.querySelector('.form .quantity_empty');
    let formButton = formElement.querySelector('.form .form_button');
    let value = quantityInput.value;
    if (value.length == 0) {
        asterisk.classList.add('error');
        quantityInput.classList.add('error');
        quantityError.classList.remove('error');
        quantityEmpty.classList.add('error');
        formButton.classList.remove('quantity');
    } else if (typeof value !== 'string' || value < 1 || value > 1000 || /[^0-9]+/.test(value)) {
        asterisk.classList.add('error');
        quantityInput.classList.add('error');
        quantityError.classList.add('error');
        quantityEmpty.classList.remove('error');
        formButton.classList.remove('quantity');
    } else {
        asterisk.classList.remove('error');
        quantityInput.classList.remove('error');
        quantityError.classList.remove('error');
        quantityEmpty.classList.remove('error');
        formButton.classList.add('quantity');
    }
}

const testDate = (formElement) => {
    let asterisk = formElement.querySelector('.form .group_4 .label_group .elem_2');
    let startDate = formElement.querySelector('.form .group_4 .input_elem:nth-child(1)');
    let endDate = formElement.querySelector('.form .group_4 .input_elem:nth-child(2)');
    let rangeError = formElement.querySelector('.form .range_error');
    let rangeEmpty = formElement.querySelector('.form .range_empty');
    let formButton = formElement.querySelector('.form .form_button');
    let startDateValue = new Date(startDate.value);
    let endDateValue = new Date(endDate.value);
    let currentDateValue = new Date();
    if (startDateValue > currentDateValue || endDateValue > currentDateValue
        || startDateValue > endDateValue) {
        asterisk.classList.add('error');
        rangeError.classList.add('error');
        rangeEmpty.classList.remove('error');
        startDate.classList.add('error');
        endDate.classList.add('error');
        formButton.classList.remove('startDate');
        formButton.classList.remove('endDate');
    } else if (startDate.value.length == 0 || endDate.value.length == 0) {
        asterisk.classList.add('error');
        rangeError.classList.remove('error');
        rangeEmpty.classList.add('error');
        if (startDate.value.length == 0) {
            startDate.classList.add('error');
            formButton.classList.remove('startDate');
        } else {
            startDate.classList.remove('error');
            formButton.classList.add('startDate');
        }
        if (endDate.value.length == 0) {
            endDate.classList.add('error');
            formButton.classList.remove('endDate');
        } else {
            endDate.classList.remove('error');
            formButton.classList.add('endDate');
        }
    } else {
        asterisk.classList.remove('error');
        rangeError.classList.remove('error');
        rangeEmpty.classList.remove('error');
        startDate.classList.remove('error');
        endDate.classList.remove('error');
        formButton.classList.add('startDate');
        formButton.classList.add('endDate');
    }
}

export { testLogin, testPassword, wrongPassword, testInn, testQuantity, testDate };