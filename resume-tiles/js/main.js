var appData = {
    cards: [
        { title: 'Docker', iconCssClass: 'devicon-docker-plain' },
        { title: 'React', iconCssClass: 'devicon-react-original' },
        { title: 'JavaScript', iconCssClass: 'devicon-javascript-plain' },
        { title: 'OSX', iconCssClass: 'ion-social-apple' },
        { title: 'Angular', iconCssClass: 'devicon-angularjs-plain' },
    ]
};


new Vue({
    el: '#app',
    data: {
        cards: appData.cards,
        cardEnlargedIndex: null
    },
    methods: {
        onCardClick: function (cardIndex) {
            if (this.cardEnlargedIndex === null) {
                this.cardEnlargedIndex = cardIndex;
            } else { 
                this.cardEnlargedIndex = null;
            }
            
        }
    }
});