import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

const options = ['OK', 'No', 'Cancel'];

ReactDOM.render(
    <Component options={options} />,
    document.getElementById('app')
);