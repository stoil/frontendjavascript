(function() {

const form = document.getElementById('registerForm'); // Getting form element

/**
 * Attacthing EventListener to the form element
 * and listens for submit event. When the form submit event is fired
 * the callback function loops trough all form elements and fires
 * checkField function in order to check if Fields values are correct.
 * If there is even one field which fails to validate the form can not be submitted
 */
form.addEventListener('submit', function(e) {
    const elements = this.elements;
    let errorsCount = 0;
    for (let i = 0; i < elements.length - 1; i++) {
        if (checkField(elements[i]) == false) {
            errorsCount++;
        }
    }
    if (errorsCount > 0) {
        e.preventDefault();
    }
});

/**
 * checkField function switches between different cases and
 * fires a relevant function for each form element
 */

function checkField(element) {
    let elName = element.getAttribute('name');
    switch (elName) {
        case 'name': {
            return checkName(element);
        }
        case 'userName': {
            return checkUserName(element);
        }
        case 'email': {
            return checkEmail(element);
        }
        case 'password': {
            return checkPassword(element);
            break;
        }
        case 'password2': {
            return confirmPassword(element);
            break;
        }
    }
}

// Check if field value matches the pattern and return true or false
function checkName(el) {
    let isValid = /^\D+$/.test(el.value);
    if (isValid == false || el.value == '' || el.value == ' ') {
        showErrorMessage(el);
    } else {
        hideErrorMessage(el);
    }
    return isValid;
}

// Check if field value matches the pattern and return true or false
function checkUserName(el) {
    let isValid = /^\w+$/.test(el.value);
    if (isValid == false || el.value == '') {
        showErrorMessage(el);
    } else {
        hideErrorMessage(el);
    }
    return isValid;
}

// Check if field value matches the pattern and return true or false
function checkEmail(el) {
    let isValid = /[^@]+@[^@]+/.test(el.value);
    if (isValid == false || el.value == '') {
        showErrorMessage(el);
    } else {
        hideErrorMessage(el);
    }
    return isValid;
}

// Check if field value matches the pattern and return true or false
function checkPassword(el) {
    if (el.value.length < 8 || el.value == '') {
        showErrorMessage(el);
        return false;
    } else {
        hideErrorMessage(el);
        return true;
    }
}

// Accepts element and return it's value
function getElementVal(el) {
    return el.value;
}

let firstPasswordField = document.getElementById('password'); // Get second password field
// Check if field value matches the pattern and return true or false
function confirmPassword(el) {
    if (el.value.length < 8 || el.value !== geteLementVal(firstPasswordField)) {
        showErrorMessage(el);
        return false;
    } else {
        hideErrorMessage(el);
        return true;
    }
}

// Show error message for the relevant element
function showErrorMessage(element) {
    let parentEl = element.parentElement;
    let errorEl = parentEl.querySelector('.error-message');
    errorEl.classList.add('show');
}

// Remove error message for the relevant element
function hideErrorMessage(element) {
    let parentEl = element.parentElement;
    let errorEl = parentEl.querySelector('.error-message');
    errorEl.classList.remove('show');
}
}());
