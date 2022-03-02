import React, {useState,useEffect} from 'react'


// configurations
import {POSTER_SIZE, BACKDROP_SIZE,IMAGE_BASE_URL} from '../config';

// components

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image for "not found"
import NoImage from '../images/no_image.jpg';

const Home = () => {

    // desturcturing props
    const {state,loading,error} = useHomeFetch();

    console.log(state);
    
    return (
    <div>
        Home page
    </div>
    )
}

export default Home;