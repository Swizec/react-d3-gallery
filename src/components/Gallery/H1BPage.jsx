
import React, { Component } from 'react';
import H1BGraph from '../../../modules/h1b-software-salaries/src/components/H1BGraph'

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.decapitalize = function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

const H1BPage = ({width, height}) => {
    return (
        <H1BGraph url="modules/h1b-software-salaries/public/data/h1bs.csv" />
    );
}

export default H1BPage;
