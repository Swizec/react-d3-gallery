
import React, { Component } from 'react';

import ParticlesPage from './ParticlesPage';
import SpaceInvadersPage from './SpaceInvadersPage';

class Carousel extends Component {
    constructor() {
        super();

        this.state = {
            page: 0,
            components: [ParticlesPage,
                         SpaceInvadersPage]
        };
    }

    goLeft() {
        this.setState({page: this.state.page-1})
    }

    goRight() {
        this.setState({page: this.state.page+1})
    }

    render() {
        let page = this.state.components[this.state.page];

        return (
            <div>
                <button onClick={::this.goLeft}>Left</button>
                {React.createElement(page, null)}
                <button onClick={::this.goRight}>Right</button>
            </div>
        );
    }
};

export default Carousel;
