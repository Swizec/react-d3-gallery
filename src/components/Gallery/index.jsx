
import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

const GalleryPage = (url, i, height, carouselIndex) => (
    <CarouselItem key={`galleryPage-${i}`}
                  className="text-center">
        <iframe src={carouselIndex == i ? url : ''}
                style={{height: height, width: '800px',
                        border: '0px'}} />
    </CarouselItem>
);

class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, selectedDirection) {
        this.setState({
            index: selectedIndex,
            direction: selectedDirection
        });
    }

    render() {
        let height = this.props.height;
        return (
            <Carousel activeIndex={this.state.index}
                      direction={this.state.direction}
                      onSelect={::this.handleSelect}
                      style={{height: height}}>
                {this.props.urls.map(
                    (url, i) => GalleryPage(url, i, height, this.state.index))}
            </Carousel>
        );
    }
};
Gallery.defaultProps = { height: 600 };

export default Gallery;
