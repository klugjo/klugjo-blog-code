import React from 'react';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    findRenderedDOMComponentWithClass,
    Simulate
} from 'react-addons-test-utils';
import Component from '../src/Component';
import {expect} from 'chai';

describe('Component', () => {

    it('renders as many buttons as stated in the options', () => {

        const component = renderIntoDocument(
            <Component options={['Bleach', 'Nevermind', 'In Utero']} />
        );

        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(3);
        expect(buttons[0].textContent).to.equal('Bleach');
        expect(buttons[1].textContent).to.equal('Nevermind');
        expect(buttons[2].textContent).to.equal('In Utero');
    });

    it('changes the displayed text when button is clicked', () => {

        const component = renderIntoDocument(
            <Component options={['Bleach', 'Nevermind', 'In Utero']} />
        );

        const displayText = findRenderedDOMComponentWithClass(component, 'display-text');
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        Simulate.click(buttons[0]);
        expect(displayText.textContent).to.equal('Bleach');

        Simulate.click(buttons[1]);
        expect(displayText.textContent).to.equal('Nevermind');

        Simulate.click(buttons[2]);
        expect(displayText.textContent).to.equal('In Utero');
    });

});