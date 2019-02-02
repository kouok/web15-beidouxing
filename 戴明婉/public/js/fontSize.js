document.documentElement.style.fontSize =
    document.documentElement.getBoundingClientRect().width / 7.5 + 'px';
window.onresize = function () {
    document.documentElement.style.fontSize =
        document.documentElement.getBoundingClientRect().width / 7.5 + 'px';
};
