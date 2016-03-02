import React from 'react';

export default React.createClass({
    getOptions: function () {
        return this.props.options || [];
    },
    render: function () {
        return <div>
            this.getOptions().map(option => {
            <button key={option}
                    onClick={() => this.props.callback(option)}>
                <span>{option}</span>
            </button>
        })
        </div>
    }
});