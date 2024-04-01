window.addEventListener('load', function() {
    document
        .querySelector('.contact-form__submit')
        .addEventListener('click', function(event) {
            event.preventDefault();
            document
                .querySelectorAll('.contact-form__textfield-error')
                .forEach(error => error.remove());
            document
                .querySelectorAll('.contact-form__textfield')
                .forEach(textfield => {
                    if (textfield.value == "") {
                        addClass('contact-form__textfield--error', textfield);
                        const p = document.createElement('p');
                        p.textContent = "This field can't be empty";
                        addClass('contact-form__textfield-error', p);
                        textfield.parentElement.appendChild(p);
                    } else {
                        removeClass('contact-form__textfield--error', textfield);
                    }
                });
        });
});
