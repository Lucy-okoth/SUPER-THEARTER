import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {


    const [movies,setMovies] = useState([])


    const movie = movies[Math.random() * movies.length]

    useEffect (() => {
      axios.get (requests.requestRating).then ((response) => {
        setMovies (response.data.results)
      });

    },[]);

    console.log (movie);
  return (
    <div>Main</div>
  )
}

export default Main