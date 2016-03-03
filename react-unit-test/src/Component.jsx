import React from 'react';

export default React.createClass({
    getOptions: function () {
        return this.props.options || [];
    },
    getInitialState: function() {
        return {
            displayText: "Click on a button"
        };
    },
    clickHandler: function (displayText) {
        this.setState({displayText: displayText});
    },
    render: function () {
        return <div>
            <div className={"display-text"}>{this.state.displayText}</div>
            {
                this.getOptions().map(option =>
                    <button key={option}
                            onClick={() => this.clickHandler(option)}>
                        <span>{option}</span>
                    </button>
                )
            }
        </div>
    }
});