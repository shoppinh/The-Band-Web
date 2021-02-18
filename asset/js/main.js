var header = document.getElementById('header');

var mobile_btn = document.querySelector('#header .mobile-menu-btn');
var currentHeight = header.clientHeight;
mobile_btn.onclick = function () {
    var isClosed = header.clientHeight === currentHeight;
    if (isClosed) {
        header.style.height = 'auto';

    } else {
        header.style.height = `${currentHeight}px`;
    }
}

var mobile_refs = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < mobile_refs.length; i++) {
    var menuItem = mobile_refs[i];
    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = `${currentHeight}px`;
        }
    }
}