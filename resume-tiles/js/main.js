var appData = {
    cards: [
        { title: 'Docker', iconCssClass: 'devicon-docker-plain' },
        { title: 'React', iconCssClass: 'devicon-react-original' },
        { title: 'JavaScript', iconCssClass: 'devicon-javascript-plain' },
        { title: 'OSX', iconCssClass: 'ion-social-apple' },
        { title: 'Angular', iconCssClass: 'devicon-angularjs-plain' },
    ],
    popupCss: {
        width: '50vw',
        height: '50vh',
        top: '50%',
        left: '50%',
        'margin-top': '-25vh',
        'margin-left': '-25vw'
    }
};

new Vue({
    el: '#app',
    data: {
        cards: appData.cards,
        cardEnlargedIndex: null,
        cardsDOM: document.getElementsByClassName('card')
    },
    methods: {
        onCardClick: function (cardIndex) {
            var cardDOM = this.cardsDOM[cardIndex];
            cardDOM.style['z-index'] = 10;
            TweenLite.to(cardDOM, 0.3, { css: appData.popupCss });
        }
    }
});