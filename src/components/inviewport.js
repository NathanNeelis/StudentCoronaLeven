export default function isInViewport (el, section){
    const bounding = el
    const navSelection = section

        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            console.log('In the viewport!');
            navSelection.classList.add('active');
        } 
        else {
            console.log('Not in the viewport... whomp whomp');
            // navSelection.classList.remove('active');
        }
}