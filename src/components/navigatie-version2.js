// import React, { useState, useEffect } from 'react';


export default function Navigation (props) {
    return (
    <article className="navigation">     
        <nav>
            <ul>
                <a href="#Start">
                    <li id="navIntroduction" className={props.introduction ? 'active' : 'notactive'}> Introduction</li>
                </a>
                <a href="#sportSection">
                    <li id="asdf" className={props.begin ? 'active' : 'notactive'}>Het begin</li>
                </a> 
            </ul>
        </nav>
    </article>
    );
}


