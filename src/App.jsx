
import React, { Component } from 'react';
import d3 from 'd3';

import Gallery from './components/Gallery';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        let urls = ['http://swizec.github.io/space-invaders/',
                    'http://swizec.github.io/h1b-software-salaries',
                    'http://swizec.github.io/react-particles-experiment',
                    'http://swizec.github.io/flux-testing/',
                    'http://swizec.github.io/react-testing-example/',
                    'http://swizec.github.io/candidate-bucket-chart/'];

        return (
            <Gallery urls={urls} />
        );
    }
}

export default App;
