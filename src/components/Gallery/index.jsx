
import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

import ParticlesPage from './ParticlesPage';
import SpaceInvadersPage from './SpaceInvadersPage';
import H1BPage from './H1BPage';

const GalleryPage = (page, i) => (
    <CarouselItem key={`galleryPage-${i}`}
                  className="text-center"
                  style={{height: '600px', overflow: 'scroll'}}>
        {React.createElement(page, null)}
    </CarouselItem>
);

class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            index: 0,
            direction: null,
            components: [ParticlesPage,
                         SpaceInvadersPage,
                         H1BPage]
        };
    }

    handleSelect(selectedIndex, selectedDirection) {
        this.setState({
            index: selectedIndex,
            direction: selectedDirection
        });
    }

    render() {
        let page = this.state.components[this.state.page];

        return (
            <Carousel activeIndex={this.state.index}
                                direction={this.state.direction}
                                onSelect={::this.handleSelect}>
                {this.state.components.map(GalleryPage)}
            </Carousel>
        );
    }
};

export default Gallery;
