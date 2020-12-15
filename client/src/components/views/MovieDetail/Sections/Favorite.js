import React, {useEffect, useState} from 'react';
import Axios from 'axios'

function Favorite({movieId , useFrom, movieInfo}) {

    const movieTitle = movieInfo.title;
    const moviePost = movieInfo.backdrop_path;
    const movieRunTime = movieInfo.runtime;

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    useEffect(() => {

        let variables = {
            useFrom,
            movieId
        }

        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                console.log('favoriteNumber',response.data)
                
                if(response.data.success){
                    setFavoriteNumber(response.data.FavoriteNumber)
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

    return (
        <div>
            <button>{Favorited ? "Not Favorite:": "Add to Favorite"} {FavoriteNumber}</button>
        </div>
    )
}

export default Favorite
