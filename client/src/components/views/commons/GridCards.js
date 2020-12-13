import React from 'react'
import {Col } from 'antd'

function GridCards({movieId, movieName, image}) {
    return (
        <Col lg={6} md ={8} xs={24}>
            <div style={{position: 'relative'}}>
                <a href={`/movie/${movieId}`} >
                    <img style={{width:'100%', height:'320px'}} src={image} alt={movieName}></img>
                </a>
            </div>
        </Col>
    )
}

export default GridCards
