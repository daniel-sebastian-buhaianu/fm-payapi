window.addEventListener('load', function() {
    const mobileMenuContent = document.querySelector('.mobile-menu__content');

    document
        .querySelector('.mobile-menu__open-icon')
        .addEventListener('click', function() {
            removeClass('mobile-menu__content--hidden', mobileMenuContent);
    });

    mobileMenuContent
        .querySelector('.mobile-menu__close-icon')
        .addEventListener('click', function() {
            addClass('mobile-menu__content--hidden', mobileMenuContent);
    });

    document.addEventListener('click', function(event) {
        const mobileMenu = document.querySelector('.mobile-menu');
        const targetElement = event.target;
        if (targetElement != mobileMenu && !mobileMenu.contains(targetElement)) {
            addClass('mobile-menu__content--hidden', mobileMenuContent);
        }
    });

    document
        .querySelectorAll('.demo-form__input[type="submit"]')
        .forEach(input => {
            input.addEventListener('click', function(event) {
                event.preventDefault();
            });
        });

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

function removeClass(_class, element) {
    if (hasClass(_class, element)) {
        element.className = element.className.replace(_class, '');
    }
}

function addClass(_class, element) {
    if (!hasClass(_class, element)) {
        element.className = element.className + ' ' + _class;
    }
}

function hasClass(_class, element) {
    return element.className.includes(_class);
}
