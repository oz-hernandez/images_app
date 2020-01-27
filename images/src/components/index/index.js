import React from 'react';
import Home from '../../icons/home.png';
import Reel from '../../icons/film_reel.png';
import '../../App.css';


// add two pngs to a webpage with space between both
export default class Index extends React.Component {
    render() {
        return (
            <div className="left-aligned"> 
                <img src={Home} alt="pic of a home"/>
                <img src={Reel} alt="pic of film real"/>
            </div>
        );
    }
}