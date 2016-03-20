
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
        let page = this.state.page-1;

        if (page < 0) {
            page = this.state.components.length-1;
        }

        this.setState({page: page})
    }

    goRight() {
        let page = this.state.page+1;

        if (page >= this.state.components.length) {
            page = 0;
        }

        this.setState({page: page})
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
