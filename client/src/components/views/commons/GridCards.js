import React from 'react'
import {Col } from 'antd'

function GridCards({movieId, movieName, image , landingPage, characterName}) {
    if(landingPage){
        return (
            <Col lg={6} md ={8} xs={24}>
                <div style={{position: 'relative'}}>
                    <a href={`/movie/${movieId}`} >
                        <img style={{width:'100%', height:'320px'}} src={image} alt={movieName}></img>
                    </a>
                </div>
            </Col>
        )
    }else{
        return (
            <Col lg={6} md ={8} xs={24}>
                <div style={{position: 'relative'}}>
                        <img style={{width:'100%', height:'320px'}} src={image} alt={characterName}></img>
                </div>
            </Col>
        )
    }
    
}

export default GridCards
