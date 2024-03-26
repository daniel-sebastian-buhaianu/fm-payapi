window.addEventListener('load', function() {
    const mobileMenuContent = document.querySelector('.mobile-menu__content');

    document.querySelector('.mobile-menu__open-icon').addEventListener('click', function() {
        removeClass('mobile-menu__content--hidden', mobileMenuContent);
    });

    mobileMenuContent.querySelector('.mobile-menu__close-icon').addEventListener('click', function() {
        addClass('mobile-menu__content--hidden', mobileMenuContent);
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
