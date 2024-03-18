window.addEventListener('load', function() {
    const mobileMenuContainer = document.querySelector('.menu .mobile .menu-container');

    document.querySelector('.menu .mobile .icon').addEventListener('click', function() {
        removeClass('hidden', mobileMenuContainer);
    });

    mobileMenuContainer.querySelector('.close .icon').addEventListener('click', function() {
        addClass('hidden', mobileMenuContainer);
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
