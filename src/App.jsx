
import React, { Component } from 'react';
import d3 from 'd3';

import Gallery from './components/Gallery';

class App extends Component {
    constructor() {
        super();

        this.state = {rawData: []};
    }

    render() {
        let data = this.state.rawData;

        return (
            <Gallery />
        );
    }
}

export default App;
