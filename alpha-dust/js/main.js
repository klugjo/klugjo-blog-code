var alphaDust = function () {

    var _menuOn = false;

    function initPostHeader() {
        $('.main .post').each(function () {
            var $post = $(this);
            var $header = $post.find('.post-header');
            var $title = $post.find('h1.title');
            var $readMoreLink = $post.find('a.read-more');

            var toggleHoverClass = function () {
                $header.toggleClass('hover');
            };

            $title.hover(toggleHoverClass, toggleHoverClass);
            $readMoreLink.hover(toggleHoverClass, toggleHoverClass);
        });
    }

    function _menuShow () {
        $('.menu-bg').show();
        $('.menu-item').css({opacity: 0});
        TweenLite.to(".menu-container", 1, {padding: '0 40px'});
        TweenLite.to(".menu-bg", 1, {opacity: '0.92'});
        TweenMax.staggerTo(".menu-item", 0.5, {opacity: 1}, 0.3);
    }

    function _menuHide() {
        TweenLite.to(".menu-bg", 0.5, {opacity: '0', onComplete: function () {
            $('.menu-bg').hide();
        }});
        TweenLite.to(".menu-container", 0.5, {padding: '0 100px'});
    }

    function initMenu() {
        $('#aaaaa').click(function () {
            _menuShow();
            _menuOn = true;
        });
        $('.menu-bg').click(function (e) {
            if(_menuOn && e.target === this) {
                _menuHide();
                _menuOn = false;
            }
        })
    }

    return {
        initPostHeader: initPostHeader,
        initMenu: initMenu
    };
}();


$(document).ready(function () {
    alphaDust.initPostHeader();
    alphaDust.initMenu();
});