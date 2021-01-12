import React, { useState, useEffect } from 'react';
// import isInViewport from './inviewport'

export default function Navigation (props) {
    // const [sportSection, setSportSection] = useState(0);
    const [sportBounding, setSportBounding] = useState(0);
    const [navIntroduction, setNavIntroduction] = useState(0);
    const [viewport, setViewport] = useState(false);
    
    useEffect (() => {
        const section = document.querySelector('.introduction');
        // setSportSection(section)
        const placeViewport = section.getBoundingClientRect();
        setSportBounding(placeViewport)

        const nav = document.querySelector('#navIntroduction');
        setNavIntroduction(nav)
        
        window.addEventListener('scroll', isInViewport(placeViewport));

        function isInViewport(el){
            
            const bounding = el
            if (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                // setViewport(true)
                console.log('In the viewport!');
                // navSelection.classList.add('active');
            }  else {
                // setViewport(false)
                console.log('In NOT the viewport!');
            }

    }, []);

    console.log(viewport)

    // isInViewport(sportBounding, navIntroduction);

    // window.addEventListener('scroll', isInViewport(sportBounding, navIntroduction), true);

    
    // console.log(navIntroduction)


    return (
    <article className="navigation">
        <nav>
            <ul>
                <a href="#Start">
                    <li id="navIntroduction" className="links">Introduction</li>
                </a>
                <a href="#sportSection">
                    <li className="links">Het begin <span id="message"> test</span></li>
                </a>  
            </ul>
        </nav>
    </article>
    );
}




// function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)

//     );
// }



// const message = document.querySelector('#message');
// console.log(message)

// document.addEventListener('scroll', function () {
//     const messageText = isInViewport(box) ?
//         'The box is visible in the viewport' :
//         'The box is not visible in the viewport';

//     message.textContent = messageText;

// }, {
//     passive: true
// });
