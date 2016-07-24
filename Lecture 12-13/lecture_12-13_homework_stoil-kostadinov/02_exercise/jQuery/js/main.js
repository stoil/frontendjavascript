$(document).ready(function() {
    const $form = $('#registerForm');
    const $formElements = $('.input-group input');
    $form.on('blur', 'input', function(event) {
        let target = event.target;
        checkField(target);
    });

    $form.submit(function(e) {
        let errorCounter = 0;
        $formElements.map(function() {
            if (checkField(this) == false) {
                errorCounter++;
            }
            if (errorCounter > 0) {
                e.preventDefault();
            }
        });
    });

    /**
     * checkField function switches between different cases and
     * fires a relevant function for each form element
     */

    function checkField(element) {
        let elName = $(element).attr('name');

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

    function checkName(el) {
        let elVal = $(el).val();
        let isValid = /^\D+$/.test($(el).val());
        if (isValid == false || elVal == '' || elVal == ' ') {
            showErrorMessage(el);
        } else {
            hideErrorMessage(el);
        }
        return isValid;
    }

    // Check if field value matches the pattern and return true or false
    function checkUserName(el) {
        let elVal = $(el).val();
        let isValid = /^\w+$/.test(elVal);
        if (isValid == false || elVal == '') {
            showErrorMessage(el);
        } else {
            hideErrorMessage(el);
        }
        return isValid;
    }

    // Check if field value matches the pattern and return true or false
    function checkEmail(el) {
        let elVal = $(el).val();
        let isValid = /[^@]+@[^@]+/.test(elVal);
        if (isValid == false || elVal == '') {
            showErrorMessage(el);
        } else {
            hideErrorMessage(el);
        }
        return isValid;
    }

    // Check if field value matches the pattern and return true or false
    function checkPassword(el) {
        let elVal = $(el).val();
        if (elVal.length < 8 || elVal == '') {
            showErrorMessage(el);
            return false;
        } else {
            hideErrorMessage(el);
            return true;
        }
    }

    // Accepts element and return it's value
    function getElementVal(el) {
        return el.val();
    }

    let $firstPasswordField = $('#password'); // Get first password field
    // Check if field value matches the pattern and return true or false
    function confirmPassword(el) {
        let elVal = $(el).val();
        if (elVal.length < 8 || elVal !== getElementVal($firstPasswordField)) {
            showErrorMessage(el);
            return false;
        } else {
            hideErrorMessage(el);
            return true;
        }
    }

    // Show error message for the relevant element
    function showErrorMessage(element) {
        let errorBox = $(element).next('.error-message');
        errorBox.addClass('show');
    }

    // Remove error message for the relevant element
    function hideErrorMessage(element) {
        let errorBox = $(element).next('.error-message');
        errorBox.removeClass('show');
    }
});
