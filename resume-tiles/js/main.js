var resumeApp = function () {
    var cards = [
        { title: 'Docker', iconCssClass: 'devicon-docker-plain' },
        { title: 'React', iconCssClass: 'devicon-react-original' },
        { title: 'JavaScript', iconCssClass: 'devicon-javascript-plain' },
        { title: 'OSX', iconCssClass: 'ion-social-apple' },
        { title: 'Angular', iconCssClass: 'devicon-angularjs-plain' },
    ];

    var getViewportSize = function () {
        var e = window;
        var a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width: e[a + 'Width'], height: e[a + 'Height'] };
    };

    var getPopupLayoutCss = function (cardDOM) { 
        var viewport = getViewportSize();
        var cardCoordinates = cardDOM.getBoundingClientRect();
        var cardMarginTop = Math.round((viewport.height / 4) - cardCoordinates.top);
        var cardMarginLeft = Math.round((viewport.width / 4) - cardCoordinates.left);

        return {
            height: (viewport.height / 2) + 'px',
            width: (viewport.width / 2) + 'px',
            'margin-top': cardMarginTop + 'px',
            'margin-left': cardMarginLeft + 'px'
        };
    }

    var enlargeCard = function (opts) { 
        var cardIndex = opts.cardIndex;
        var cardsDOM = document.getElementsByClassName('card');
        var flipCard = opts.flipCard;
        var cardDOM = cardsDOM[cardIndex];

        var onReverseComplete = (function () {
            flipCard(null);
            cardDOM.style['z-index'] = 1;
        }).bind(this);

        flipCard(cardIndex);
        cardDOM.style['z-index'] = 10;

        return TweenMax.to(cardDOM, 0.3, {
            css: getPopupLayoutCss(cardDOM),
            onReverseComplete: onReverseComplete,
            ease: Back.easeOut.config(2)
        });
    };

    return {
        cards: cards,
        enlargeCard: enlargeCard
    }
}();

new Vue({
    el: '#app',
    data: {
        cards: resumeApp.cards,
        openCardIndex: null,
        tweenOpenCard: null
    },
    methods: {
        flipCard: function (cardIndex) { 
            this.openCardIndex = cardIndex;
        },
        onCardClick: function (cardIndex) {
            if (this.openCardIndex === null) {
                this.tweenOpenCard = resumeApp.enlargeCard({
                    cardIndex: cardIndex,
                    flipCard: this.flipCard
                });
            } else { 
                this.tweenOpenCard.reverse();
            }
        }
    }
});