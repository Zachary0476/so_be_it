import React, { Component } from 'react'
import { Carousel, Radio } from 'antd';

const contentStyle = {
    height: '3rem',
    color: '#fff',
    lineHeight: '3rem',
    textAlign: 'center',
    background: 'skyblue',
};

export const PositionCarouselDemo = () => {
    const [dotPosition, setDotPosition] = React.useState('top');

    const handlePositionChange = ({ target: { value } }) => {
        setDotPosition(value);
    };

    return (
        <>
            <Carousel dotPosition={'bottom'} autoplay={false}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </>
    );
}
