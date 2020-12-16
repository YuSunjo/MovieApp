import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Button, button} from 'antd';

function Favorite({movieId , userFrom, movieInfo}) {

    const movieTitle = movieInfo.title;
    const moviePost = movieInfo.backdrop_path;
    const movieRunTime = movieInfo.runtime;

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    let variables = {
        userFrom,
        movieId,
        movieTitle,
        moviePost,
        movieRunTime
        //userFrom: userFrom ==> 줄인거
    }
    useEffect(() => {

        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                console.log('favoriteNumber',response.data)
                console.log(FavoriteNumber)
                setFavoriteNumber(response.data.favoriteNumber)
                if(response.data.success){
                    
                }else {
                    alert('숫자 정보를 가져오는데 실패 했습니다.')
                }
            })

            Axios.post('/api/favorite/favorited', variables)
            .then(response => {
                if(response.data.success){
                    // console.log('favorited',response.data)
                    setFavorited(response.data.favorited)
                }else {
                    alert('정보를 가져오는데 실패 했습니다.')
                }
            })

    }, [])

    const onClickFavorite = () => {
        if(Favorited){
            Axios.post('/api/favorite/removeFromFavorite', variables)
            .then(response => {
                if(response.data.success){
                    setFavoriteNumber(FavoriteNumber -1)
                    setFavorited(!Favorited)
                }else{
                    alert('Favorite 리스트에서 지우는걸 실패 했습니다.')
                }
            })
        }else{
            Axios.post('/api/favorite/addToFavorite', variables)
            .then(response => {
                if(response.data.success){
                    setFavoriteNumber(FavoriteNumber +1)
                    setFavorited(!Favorited)
                }else{
                    alert('Favorite 리스트에서 추가하는것을 실패 했습니다.')
                }
            })
        }
    }

    return (
        <div>
            <Button onClick={onClickFavorite}>{Favorited ? "Not Favorite:": "Add to Favorite"} {FavoriteNumber} </Button>
        </div>
    )
}

export default Favorite
