const expensive = () => {
    console.log('expensive');
}

// lets make our own throttle fn:
const ourThrottle = (fn, limit) => {
    let flag = true;
    return function(){
        let context = this;
        args = arguments;
        if(flag){
            fn().apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}

const betterExp = ourThrottle(expensive, 2000);
window.addEventListener('resize', betterExp); 
// betterExp callback will be called only after the duration given.

// Debouncing Vs throttling : Used for optimising performance of web app, by limiting the rate of execution of fn.
// Thttling goes well for continous btn click or shooting machine game in a game.
// Debouncing suits more for seach bar typing.
// For window re-sizing, both suits. 

