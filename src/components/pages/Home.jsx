import React from 'react'
import "../styling/home.css"
import MapWithAMarker from './MapWithAMarker'
import HeaderBottom from './HeaderBottom'
import Header from './Header'





const Home = () => {
    return (
        <>
        <Header/>
            <HeaderBottom/>
            <MapWithAMarker/>
            
        </>
    )
}

export default Home
