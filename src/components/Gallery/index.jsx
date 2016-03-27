
import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

const GalleryPage = (page, i) => (
    <CarouselItem key={`galleryPage-${i}`}
                  className="text-center"
                  style={{height: '600px'}}>
        <iframe src={page}
                style={{height: '600px', width: '800px',
                        border: '0px'}} />
    </CarouselItem>
);

class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            index: 0,
            direction: null,
            examples: ['http://swizec.github.io/space-invaders/',
                       'http://swizec.github.io/h1b-software-salaries',
                       'http://swizec.github.io/react-particles-experiment',
                       'http://swizec.github.io/flux-testing/',
                       'http://swizec.github.io/react-testing-example/',
                       'http://swizec.github.io/candidate-bucket-chart/']
        };
    }

    handleSelect(selectedIndex, selectedDirection) {
        this.setState({
            index: selectedIndex,
            direction: selectedDirection
        });
    }

    render() {
        return (
            <Carousel activeIndex={this.state.index}
                      direction={this.state.direction}
                      onSelect={::this.handleSelect}>
                {this.state.examples.map(GalleryPage)}
            </Carousel>
        );
    }
};

export default Gallery;
