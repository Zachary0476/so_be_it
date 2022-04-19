import React, { Component } from 'react'
import { Carousel } from 'antd';
import one from '@/assets/imgs/1.jpeg'
import two from '@/assets/imgs/2.jpg'
import three from '@/assets/imgs/3.jpg'
import four from '@/assets/imgs/4.jpg'

const contentStyle = {
    height: '3rem',
    color: '#fff',
    lineHeight: '3rem',
    textAlign: 'center',
    background: '#f4f4f4',
    cursor: 'pointer'
};
const imgStyle = {
    width: '100%'
}

export const PositionCarouselDemo = (props) => {
    return (
        <>
            <Carousel autoplay>
                {
                    props.articles.map(bunner => {
                        return <div key={bunner._id}>
                            <div style={contentStyle}><img src={bunner.img} style={imgStyle} /></div>
                        </div>
                    })
                }

                {/* <div>
                    <div style={contentStyle}><img src={two} style={imgStyle} /></div>
                </div>
                <div>
                    <div style={contentStyle}><img src={three} style={imgStyle} /></div>
                </div>
                <div>
                    <div style={contentStyle}><img src={four} style={imgStyle} /></div>
                </div> */}
            </Carousel>
        </>
    )
}
