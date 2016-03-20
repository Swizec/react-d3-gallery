
import React, { Component } from 'react';
import d3 from 'd3';

import Carousel from './components/Carousel';

class App extends Component {
    constructor() {
        super();

        this.state = {rawData: []};
    }

    render() {
        let data = this.state.rawData;

        return (
            <Carousel />
        );
    }
}

export default App;
