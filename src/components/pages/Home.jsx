import React from 'react'
import "../styling/home.css"
import MapWithAMarker from './MapWithAMarker'
import HeaderBottom from './HeaderBottom'
import Header from './Header'
import Locations from './Locations'





const Home = () => {
    return (
        <>
        <Header/>
            <HeaderBottom/>
            <MapWithAMarker/>
            <Locations/>
        </>
    )
}

export default Home
